package Form;

import javax.naming.InitialContext;
import javax.naming.NamingException;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;


@WebServlet(name = "FormServlet", urlPatterns = "/api/search")
public class FormServlet extends HttpServlet {

    // Create a dataSource which registered in web.xml
    private DataSource dataSource;

    public void init(ServletConfig config) {
        try {
            dataSource = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/moviedb");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    // Use http GET
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");    // Response mime type

        // Output stream to STDOUT
        PrintWriter out = response.getWriter();


        try {

            // Create a new connection to database
            Connection dbCon = dataSource.getConnection();

            // Declare a new statement
            Statement statement = dbCon.createStatement();

            // Retrieve parameter "name" from the http request, which refers to the value of <input name="name"> in index.html
            String name = request.getParameter("name");
            String year = request.getParameter("year");
            String director = request.getParameter("director");
            String title = request.getParameter("title");

            // Generate a SQL query
            String query = String.format("SELECT m.id, m.title, m.year, m.director, r.rating,  \n" +
                    "substring_index(group_concat(DISTINCT CONCAT(s.id, ':', s.name) order by num_movies.num_movies, s.name), ',', 3) AS stars,  \n" +
                    "substring_index(group_concat(DISTINCT g.name order by g.name), ',', 3) AS genres FROM  \n" +
                    "movies m \n" +
                    "JOIN ratings r ON m.id = r.movieId \n" +
                    "JOIN genres_in_movies gm ON m.id = gm.movieId \n" +
                    "JOIN genres g ON gm.genreId = g.id \n" +
                    "JOIN stars_in_movies sm ON m.id = sm.movieId \n" +
                    "JOIN stars s ON sm.starId = s.id \n" +
                    "JOIN (select s.id as id, s.name as name, count(distinct m.id) as num_movies\n" +
                    "\tfrom stars s\n" +
                    "\tjoin stars_in_movies sm on s.id = sm.starId\n" +
                    "\tjoin movies m on sm.movieId = m.id\n" +
                    "\tgroup by s.id, s.name) num_movies on num_movies.id = s.id\n" +
                    "GROUP BY m.id, m.title, m.year, m.director, r.rating, r.rating \n" +
                    "having stars like '%1$s%2$s%1$s'  \n" +
                    "and m.director like '%1$s%4$s%1$s' \n" +
                    "and m.title like '%1$s%5$s%1$s' \n" +
                    "and ELT(if('%3$s' = '', 1, 2), m.year = '%3$s', m.year = min(m.year) < m.year < min(m.year));","%", name, year,director, title);
//            System.out.println(query);

            // Log to localhost log
            request.getServletContext().log("query：" + query);

            // Perform the query
            ResultSet rs = statement.executeQuery(query);
            System.out.println(query);

            JsonArray jsonArray = new JsonArray();

            // Iterate through each row of rs
            while (rs.next()) {
                System.out.println("joi");
                String movie_id = rs.getString("id");
                String movie_title = rs.getString("title");
                String movie_year = rs.getString("year");
                String movie_director = rs.getString("director");
                String movie_rating = rs.getString("rating");
                String movie_stars = rs.getString("stars");
                String movie_genres = rs.getString("genres");

                // Create a JsonObject based on the data we retrieve from rs
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("movie_id", movie_id);
                jsonObject.addProperty("movie_title", movie_title);
                jsonObject.addProperty("movie_year", movie_year);
                jsonObject.addProperty("movie_director", movie_director);
                jsonObject.addProperty("movie_rating", movie_rating);
                jsonObject.addProperty("movie_stars", movie_stars);
                jsonObject.addProperty("movie_genres", movie_genres);

                jsonArray.add(jsonObject);
            }

            // Close all structures
            rs.close();
            statement.close();
            dbCon.close();

            // Log to localhost log
            request.getServletContext().log("searching " + jsonArray.size() + " results");

            // Write JSON string to output
            out.write(jsonArray.toString());
            // Set response status to 200 (OK)
            response.setStatus(200);



        } catch (Exception e) {
            /*
             * After you deploy the WAR file through tomcat manager webpage,
             *   there's no console to see the print messages.
             * Tomcat append all the print messages to the file: tomcat_directory/logs/catalina.out
             *
             * To view the last n lines (for example, 100 lines) of messages you can use:
             *   tail -100 catalina.out
             * This can help you debug your program after deploying it on AWS.
             */
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("errorMessage", e.getMessage());
            out.write(jsonObject.toString());
//            request.getServletContext().log("Error: ", e);
//
//            // Output Error Massage to html
//            out.println(String.format("<html><head><title>MovieDBExample: Error</title></head>\n<body><p>SQL error in doGet: %s</p></body></html>", e.getMessage()));
//            return;
            response.setStatus(500);
        }
        finally {
            out.close();
        }
    }
}
