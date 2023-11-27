Youtube Link: https://youtu.be/8qZ1yXL_34M

CONTRIBUTIONS:

Howard You: Autocomplete, Fuzzy Search

Benjamin Wu: Android

FUZZY SEARCH
We implemented fuzzy search using the edth function, and created a if-else case where it would only apply the fuzzy search when the length of the query was longer than 5 characters. We found that this improved the accuracy of our searches. Then, we unioned the results of the fuzzy search with the results of the fulltext search. 

SELECT *
FROM movies m
WHERE edth(m.title, ?, CASE WHEN LENGTH(?) <= 5 THEN 1 ELSE 5 END) 
UNION
SELECT *
FROM movies m
WHERE MATCH(m.title) AGAINST (? IN BOOLEAN MODE) 
LIMIT 10;

