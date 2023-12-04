- # General
    - #### Team#: 
    team-cha
    - #### Names:
    Howard You, Benjamin Wu
    - #### Project 5 Video Demo Link:
    
    - #### Instruction of deployment:
    
    - #### Collaborations and Work Distribution:
    None
  
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

    - #### How read/write requests were routed to Master/Slave SQL?
    

- # JMeter TS/TJ Time Logs
    - #### Instructions of how to use the `log_processing.*` script to process the JMeter logs.


- # JMeter TS/TJ Time Measurement Report

| **Single-instance Version Test Plan**          | **Graph Results Screenshot** | **Average Query Time(ms)** | **Average Search Servlet Time(ms)** | **Average JDBC Time(ms)** | **Analysis** |
|------------------------------------------------|------------------------------|----------------------------|-------------------------------------|---------------------------|--------------|
| Case 1: HTTP/1 thread                          | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |
| Case 2: HTTP/10 threads                        | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |
| Case 3: HTTPS/10 threads                       | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |
| Case 4: HTTP/10 threads/No connection pooling  | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |

| **Scaled Version Test Plan**                   | **Graph Results Screenshot** | **Average Query Time(ms)** | **Average Search Servlet Time(ms)** | **Average JDBC Time(ms)** | **Analysis** |
|------------------------------------------------|------------------------------|----------------------------|-------------------------------------|---------------------------|--------------|
| Case 1: HTTP/1 thread                          | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |
| Case 2: HTTP/10 threads                        | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |
| Case 3: HTTP/10 threads/No connection pooling  | ![](path to image in img/)   | ??                         | ??                                  | ??                        | ??           |


