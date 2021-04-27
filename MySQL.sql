SELECT SUM(price) as TotalPrice FROM rating;
SELECT MAX(total_ratings) as MaxRating FROM ratinG;
SELECT genre, AVG(price) as AveragePrice FROM rating GROUP BY genre;