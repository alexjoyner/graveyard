-- Select all logs for a given point between two points in time
--     returned as an array
SELECT * FROM(
	SELECT 
	    *,
	    ROW_NUMBER() OVER (ORDER BY datetime asc) as rn
	FROM 
	    log 
	WHERE 
	    point_id = 1 AND datetime BETWEEN '2018-09-14 00:00:00' AND '2018-09-15 00:00:00'
) logs
WHERE rn % 50 = 0;