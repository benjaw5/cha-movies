package Browse;

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
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name = "MetaDataServlet", urlPatterns = "/api/meta")
public class MetaDataServlet extends HttpServlet {

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

        PrintWriter out = response.getWriter();

        try (out; Connection dbCon = dataSource.getConnection()) {






            String param_table_name = request.getParameter("table_name");

            String query = String.format("DESCRIBE %s;", param_table_name);

            PreparedStatement statement = dbCon.prepareStatement(query);
//            statement.setString(1, param_table_name);


            // Log to localhost log
            request.getServletContext().log("query：" + query);

            ResultSet rs = statement.executeQuery(query);

            JsonArray jsonArray = new JsonArray();

            // Iterate through each row of rs
            while (rs.next()) {
                String field = rs.getString("field");
                String type = rs.getString("type");

                // Create a JsonObject based on the data we retrieve from rs
                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("field", field);
                jsonObject.addProperty("type", type);
                jsonArray.add(jsonObject);
            }

            // Close all structures
            rs.close();
            statement.close();
            dbCon.close();

            // Log to localhost log
            request.getServletContext().log("returning " + jsonArray.size() + " fields");

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
