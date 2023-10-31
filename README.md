Youtube Link: https://youtu.be/LGNZH3G7ae0

CONTRIBUTIONS:
Howard You: Frontend (React + Styling), Backend(APIs, Database queries), AWS setup
Benjamin Wu: Frontend (React), Backend(APIs, Database queries), AWS setup


SUBSTRING MATCH QUERY:
SELECT m.id, m.title, m.year, m.director, r.rating,
substring_index(group_concat(DISTINCT CONCAT(g.id, ':', g.name) ORDER BY g.name), ',', 3) genres,
substring_index(group_concat(DISTINCT CONCAT(s.id, ':', s.name) order by num_movies.num_movies desc, s.name), ',', 3) stars FROM
(SELECT * FROM movies m HAVING m.director LIKE '%1$s%4$s%1$s' AND m.title LIKE '%1$s%5$s%1$s') m
JOIN ratings r ON m.id = r.movieId
JOIN genres_in_movies gm ON m.id = gm.movieId
JOIN genres g ON gm.genreId = g.id
JOIN stars_in_movies sm ON m.id = sm.movieId
JOIN stars s ON s.id = sm.starId
JOIN (select sm.starId as id, count(distinct m.id) as num_movies
FROM stars_in_movies sm
join movies m on sm.movieId = m.id
group by sm.starId) num_movies on num_movies.id = s.id
GROUP BY m.id, m.title, m.year, m.director, r.rating, r.rating
having group_concat(DISTINCT s.name) like '%1$s%2$s%1$s'
and ELT(if('%3$s' = '', 2, 1), m.year = '%3$s', m.year = min(m.year) < m.year < min(m.year));","%", stars, year,director, title);

We used LIKE when we were search for title, director, star's name in the form servlet. In our code we are return a list of stars id and stars name so we want use "%whatever name%" to find all the movies with that actor's name.

PROBLEMS WE ENCOUNTERED:
This command did not work: mysql -u mytestuser -p -e "select * from sales where saleDate ={demo date};"
So we split it into two parts, first using  mysql -u mytestuser -p to get into the mysql console, then we executed the command "use moviedb; select * from sales where saleDate ={demo date};"
The date is also different in AWS, which means since today is 2023-10-30, we had to use the date of 2023-10-31