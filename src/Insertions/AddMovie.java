package Insertions;


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

// Declaring a WebServlet called SingleStarServlet, which maps to url "/api/single-star"
@WebServlet(name = "AddMovieServlet", urlPatterns = "/api/addmovie")
public class AddMovie extends HttpServlet {
    private static final long serialVersionUID = 2L;

    // Create a dataSource which registered in web.xml
    private DataSource dataSource;

    public void init(ServletConfig config) {
        try {
            dataSource = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/moviedb");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.setContentType("application/json"); // Response mime type

        // Output stream to STDOUT
        PrintWriter out = response.getWriter();


        // Retrieve parameter movie id from url request.
        String param_movie_title = request.getParameter("title");
        String param_movie_year = request.getParameter("year");
        String param_movie_director = request.getParameter("director");
        String param_birth_year = request.getParameter("birthYear");
        String param_star_name = request.getParameter("name");
        String param_genre = request.getParameter("genre");

        JsonObject responseJsonObject = new JsonObject();

        if (param_star_name.isEmpty() || param_genre.isEmpty() ||
                param_movie_title.isEmpty() || param_movie_director.isEmpty() ||
                param_movie_year.isEmpty()){
            responseJsonObject.addProperty("status", "fail");
            responseJsonObject.addProperty("message", "fail");
            response.setStatus(500);
            out.write(responseJsonObject.toString());
        }
        else{
            // Get a connection from dataSource and let resource manager close the connection after usage.
            try (Connection conn = dataSource.getConnection()) {


                // Declare our statement
//                System.out.println(query);
                PreparedStatement statement = conn.prepareCall("{call add_movie(?,?,?,?,?,?)}");

                statement.setString(1,param_movie_title);
                statement.setString(2,param_movie_year);
                statement.setString(3,param_movie_director);
                statement.setString(4,param_star_name);
                statement.setString(5,param_birth_year);
                statement.setString(6,param_genre);

//                int rowsAffected = statement.executeUpdate();
                boolean hasResults = statement.execute();
                System.out.println(hasResults);
                if (!hasResults) {
                    responseJsonObject.addProperty("status", "success");
                    responseJsonObject.addProperty("message", "success");
                    response.setStatus(200);
                } else {
                    responseJsonObject.addProperty("status", "in database");
                    responseJsonObject.addProperty("message", "fail");
                    response.setStatus(500);
                }

                // Iterate through each row of rs
                statement.close();
                out.write(responseJsonObject.toString());



            } catch (Exception e) {
                // Write error message JSON object to output
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("errorMessage", e.getMessage());
                out.write(jsonObject.toString());

                // Log error to localhost log
                request.getServletContext().log("Error:", e);
                // Set response status to 500 (Internal Server Error)
                response.setStatus(500);
            } finally {
                out.close();
            }
        }
        



        // Always remember to close db connection after usage. Here it's done by try-with-resources

    }

}