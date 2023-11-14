Youtube Link: https://youtu.be/LGNZH3G7ae0

CONTRIBUTIONS:
Howard You: reCaptcha, PreparedStatement, Encrypted Password, XML Parser
Benjamin Wu: HTTPS, Dashboard

Filenames with PreparedStatement:
/Browse/GenreSevlet
/Browse/MetaDataServlet
/Browse/SearchSevlet
/Browse/SingleGenreServlet
/Browse/TableNameServlet
/cart/PaymentServlet
/cart/SaleServlet
/Insertions/AddMovie
/Insertions/AddStar
/login/eLoginServlet
/login/LoginServlet
/MovieRatedServlet
/SingleMovieServlet
/SingleStarServlet
/StarsServlet


Optimization Strategies:
We made use of multithreading when parsing the two different XML files (mains243.xml, actors63.xml) to concurrently parse their information
into in-memory data structures, and then after joining both threads we parsed the last casts124.xml. Then, using the information stored in these data structures, we inserted the appropriate items into our database using batch-insert, which only executes an insertion for every 100 rows.

Parser Report:
Inserted 8724 movies
Inserted 124 genres
Inserted 9784 genres_in_movies
Inserted 6839 stars
Inserted 25782 stars_in_movies
3363 films inconsistent
28 films duplicate
24 stars duplicate
1592 movies not found
16801 stars not found in cast
