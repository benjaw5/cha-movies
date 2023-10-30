package Browse;

import Entity.Movie;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "SingleTitleServlet", urlPatterns = "/api/single-title")
public class SingleTitleServlet extends HttpServlet {

    // Create a dataSource which registered in web.xml
    private DataSource dataSource;

    public void init(ServletConfig config) {
        try {
            dataSource = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/moviedb");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    public List<Movie> transformResponseToMovies(ResultSet resultSet) throws Exception {
        List<Movie> movies = new ArrayList<>();
        while (resultSet.next()) {
            String movie_id = resultSet.getString("id");
            String movie_title = resultSet.getString("title");
            String movie_year = resultSet.getString("year");
            String movie_director = resultSet.getString("director");
            String movie_rating = resultSet.getString("rating");
            String movie_stars = resultSet.getString("stars");
            String movie_genre = resultSet.getString("genres");

            Movie movie = new Movie(movie_id, movie_title, movie_year, movie_director, movie_rating, movie_stars, movie_genre);
            movies.add(movie);
        }

        return movies;
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");    // Response mime type


        PrintWriter out = response.getWriter();


        try {

            // Create a new connection to database
            Connection dbCon = dataSource.getConnection();


            String param_title = request.getParameter("title");

            // Generate a SQL query
            String query = String.format("SELECT m.id, m.title, m.year, m.director, r.rating, \n" +
                    "group_concat(DISTINCT CONCAT(g.id, ':',g.name)) genres, \n" +
                    "group_concat(DISTINCT CONCAT(s.id, ':', s.name)) stars FROM\n" +
                    "(SELECT * FROM movies m WHERE m.title LIKE '%s%%') m\n" +
                    "JOIN ratings r ON m.id = r.movieId\n" +
                    "JOIN genres_in_movies gm ON m.id = gm.movieId\n" +
                    "JOIN genres g ON gm.genreId = g.id\n" +
                    "JOIN stars_in_movies sm ON m.id = sm.movieId\n" +
                    "JOIN stars s ON sm.starId = s.id\n" +
                    "GROUP BY m.id, m.title, m.year, m.director, r.rating;", param_title);


            System.out.println(query);
            PreparedStatement statement = dbCon.prepareStatement(query);
            request.getServletContext().log("query：" + query);

            ResultSet resultSet = statement.executeQuery(query);
            List<Movie> movies = transformResponseToMovies(resultSet);

            JsonArray jsonArray = new JsonArray();

            for (Movie m: movies) {
                jsonArray.add(m.movieToJson());
            }


            // Close all structures
            resultSet.close();
            statement.close();
            dbCon.close();

            // Log to localhost log
            request.getServletContext().log("returning " + jsonArray.size() + " movies");

            // Write JSON string to output
            out.write(jsonArray.toString());
            // Set response status to 200 (OK)
            response.setStatus(200);



        } catch (Exception e) {

            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("errorMessage", e.getMessage());
            out.write(jsonObject.toString());

            response.setStatus(500);
        }
        finally {
            out.close();
        }
    }
}