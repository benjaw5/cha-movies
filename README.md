- # General
    - #### Team#: 
    team-cha
    - #### Names:
    Howard You, Benjamin Wu
    - #### Project 5 Video Demo Link:
    https://youtu.be/O8rstOzKhe8
    - #### Instruction of deployment:
    
    - #### Collaborations and Work Distribution:
    Howard You: Task 1, Task 2, Task 3, Task 4, Readme, Submission
  
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

