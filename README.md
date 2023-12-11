- # General
    - #### Team#: 
    team-cha
    - #### Names:
    Howard You, Benjamin Wu
    - #### Project 5 Video Demo Link:
    https://youtu.be/O8rstOzKhe8
    - #### Instruction of deployment:
    
    - #### Collaborations and Work Distribution:

  
- # Connection Pooling
    - #### Include the filename/path of all code/configuration files in GitHub of using JDBC Connection Pooling.
  ./src/MovieRatedServlet.java
  ./src/SingleMovieServlet.java
  ./src/SingleStarServlet.java
  ./src/StarsServlet.java
  ./src/Browse/GenreServlet.java
  ./src/Browse/MetaDataServlet.java
  ./src/Browse/SingleGenreServlet.java
  ./src/Browse/SingleTitleServlet.java
  ./src/Browse/TableNameServlet.java
  ./src/Insertions/AddMovie.java
  ./src/Insertions/AddStar.java
  ./src/Search/AdvancedSearchServlet.java
  ./src/Search/AutocompleteServlet.java
  ./src/Search/SearchServlet.java
  ./src/cart/PaymentServlet.java
  ./src/cart/SaleServlet.java
  ./src/login/eLoginServlet.java
  ./src/login/LoginServlet.java
    - #### Explain how Connection Pooling is utilized in the Fabflix code.
    The connection pool in our code has a max of 100 connections that can be reused when unallocated and requested by a servlet. After the connection is closed by the servlet, it goes back into the connection pool. In our pool, at most 30 connections can stay idle, if more than 30, our pool releases the extra connections.

When a servlet requests a connection, there is a max wait limit of 10 seconds to find a connection in the pool before an exception is thrown.
    - #### Explain how Connection Pooling works with two backend SQL.


    

- # Master/Slave
    - #### Include the filename/path of all code/configuration files in GitHub of routing queries to Master/Slave SQL.
  ./src/Insertions/AddMovie.java
  ./src/Insertions/AddStar.java
  ./src/cart/SaleServlet.java
    - #### How read/write requests were routed to Master/Slave SQL?
    In the Master/Slave instances requests were routed through the context.xml resources. We made all read requests go through the local host MySQL and for write requests we made all requests go through the master MySQL database.
 
    <?xml version="1.0" encoding="UTF-8"?>

<Context>

    <!-- Defines a Data Source Connecting to localhost moviedbexample-->
    <Resource
            name="jdbc/moviedb"
            auth="Container"
            driverClassName="com.mysql.cj.jdbc.Driver"
            factory="org.apache.tomcat.jdbc.pool.DataSourceFactory"
            maxTotal="100" maxIdle="30" maxWaitMillis="10000"
            type="javax.sql.DataSource"
            username="root"
            password="newpassword"
            url="jdbc:mysql://localhost:3306/moviedb?autoReconnect=true&amp;allowPublicKeyRetrieval=true&amp;useSSL=false&amp;cachePrepStmts=true"/>

    <Resource
            name="master"
            auth="Container"
            driverClassName="com.mysql.cj.jdbc.Driver"
            factory="org.apache.tomcat.jdbc.pool.DataSourceFactory"
            maxTotal="100" maxIdle="30" maxWaitMillis="10000"
            type="javax.sql.DataSource"
            username="root"
            password="newpassword"
            url="jdbc:mysql://172.31.3.64:3306/moviedb?autoReconnect=true&amp;allowPublicKeyRetrieval=true&amp;useSSL=false&amp;cachePrepStmts=true"/>


</Context>
    

- # JMeter TS/TJ Time Logs
    - #### Instructions of how to use the `log_processing.*` script to process the JMeter logs.
The log_processing.py script is in the github with the path ./time_log/log_processing.py. To use the script, run the command: python ./log_processing.py TJ1 TS1 TJ2 TS2
Where TJ1/TS1 are the TJ/TS files of the first instance and TJ2/TS2 are the TJ/TS files of the second instance. You may also run it with a single set of TJ/TS file or more than two:
python ./log_processing.py TJ1 TS1

- # JMeter TS/TJ Time Measurement Report

| **Single-instance Version Test Plan**          | **Graph Results Screenshot** | **Average Query Time(ms)** | **Average Search Servlet Time(ms)** | **Average JDBC Time(ms)** | **Analysis** |
|------------------------------------------------|------------------------------|----------------------------|-------------------------------------|---------------------------|--------------|
| Case 1: HTTP/1 thread                          | ![](path to image in img/)   | 83                        | 66.11203849605563                   |  13.458691226781067      | ??           |
| Case 2: HTTP/10 threads                        | ![](path to image in img/)   | 214                        |   184.87746761318564                 |  18.384260016846852         | ??           |
| Case 3: HTTPS/10 threads                       | ![](path to image in img/)   | 194                         | 170.76422187833057                  | 18.61608283533758          | ??           |
| Case 4: HTTP/10 threads/No connection pooling  | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |

| **Scaled Version Test Plan**                   | **Graph Results Screenshot** | **Average Query Time(ms)** | **Average Search Servlet Time(ms)** | **Average JDBC Time(ms)** | **Analysis** |
|------------------------------------------------|------------------------------|----------------------------|-------------------------------------|---------------------------|--------------|
| Case 1: HTTP/1 thread                          | ![](path to image in img/)   | 83                         |  21.66625855465587                  | 20.44821045237588         | ??           |
| Case 2: HTTP/10 threads                        | ![](path to image in img/)   | 136                        | 66.11203849605563                  | 13.458691226781067        | ??           |
| Case 3: HTTP/10 threads/No connection pooling  | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |

