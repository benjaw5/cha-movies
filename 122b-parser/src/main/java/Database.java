import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import Entities.Movie;
import Entities.Star;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class Database {

    private Set<String> genreSet;
    private Statement statement;

    private HikariDataSource dataSource;
    private ResultSet resultSet;
    private int actorId = 0;

    public Database() throws Exception {

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/moviedb");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
        config.setUsername("root");
        config.setPassword("newpassword");

        dataSource = new HikariDataSource(config);

        genreSet = new HashSet<>();

        try (Connection conn = dataSource.getConnection()) {
            statement = conn.createStatement();

            String query = "select max(id) id from stars;";
            resultSet = statement.executeQuery(query);

            if (resultSet.next()) {
                String id = resultSet.getString("id");
                actorId = Integer.parseInt(id.replaceAll("[^0-9]", ""));
            }

            query = "SELECT DISTINCT name genre from genres;";
            resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                genreSet.add(resultSet.getString("name"));
            }


        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void batchInsertMovies(List<Movie> movies) throws Exception {
        try (Connection conn = dataSource.getConnection()) {
            conn.setAutoCommit(false);
            String query = "insert into movies2 (id, title, year, director) values(?, ?, ?, ?);";
            PreparedStatement preparedStatement = conn.prepareStatement(query);

            int movieSize = movies.size();
            for (int i = 0; i < movieSize; i++) {
                Movie m = movies.get(i);
                preparedStatement.setString(1, m.getId());
                preparedStatement.setString(2, m.getTitle());
                preparedStatement.setString(3, m.getYear());
                preparedStatement.setString(4, m.getDirector());
                preparedStatement.addBatch();

                if (i != 0 && (i % 100 == 0 || i == movieSize-1)) {
                    try {
                        preparedStatement.executeBatch();
                        conn.commit();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
            preparedStatement.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void batchInsertActors

}
