package Browse;

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
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name = "TitleServlet", urlPatterns = "/api/title")
public class TitleServlet extends HttpServlet {

    // Create a dataSource which registered in web.xml
    private DataSource dataSource;


    // Use http GET
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("text/html");    // Response mime type

        PrintWriter out = response.getWriter();

        try {

            // Log to localhost log

            JsonArray jsonArray = new JsonArray();

            for (int num = 1; num <= 9; num++) {
                jsonArray.add((char) (num+'0'));
            }

            for (char letter = 'a'; letter <= 'z'; letter++) {
                jsonArray.add(letter);
            }

            jsonArray.add('*');

            // Log to localhost log
            request.getServletContext().log("returning " + jsonArray.size() + " genres");

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