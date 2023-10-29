package login;

import Entity.User;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@WebServlet(name = "LoginServlet", urlPatterns = "/api/login")
public class LoginServlet extends HttpServlet {
    private DataSource dataSource;

    public void init(ServletConfig config) {
        try {
            dataSource = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/moviedb");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        JsonObject responseJsonObject = new JsonObject();
        PrintWriter out = response.getWriter();

        try (Connection conn = dataSource.getConnection()) {

            String query = "SELECT * FROM user WHERE username = ? AND password = ?";
            PreparedStatement statement = conn.prepareStatement(query);

            statement.setString(1, username);
            statement.setString(2, password);

            ResultSet rs = statement.executeQuery();

            if (!rs.next() == false) {
                // Login success:
                // set this user into the session
                HttpSession session = request.getSession();


                session.setAttribute("user", new User(username, password));

                responseJsonObject.addProperty("status", "success");
                responseJsonObject.addProperty("message", "success");
                response.setStatus(200);

            } else {
                // Login fail
                responseJsonObject.addProperty("status", "fail");

                request.getServletContext().log("Login failed");
                response.sendRedirect("/login/");
            }
            rs.close();
            statement.close();
            out.write(responseJsonObject.toString());
        } catch (Exception e) {

            // Write error message JSON object to output
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("errorMessage", e.getMessage());
            out.write(jsonObject.toString());

            // Set response status to 500 (Internal Server Error)
            response.setStatus(500);
        } finally {
            out.close();
        }
    }
}