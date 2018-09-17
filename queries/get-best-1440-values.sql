WITH count AS (
    SELECT 
    	count(*) as tot_vals
    FROM log
)
SELECT datetime, val FROM(
	SELECT 
	    date_part('epoch', datetime) * 1000 as datetime, 
	    val,
    	ROW_NUMBER() OVER (ORDER BY datetime asc) as rn
	FROM 
	    log 
	WHERE 
	    point_id = 1
	ORDER BY
		datetime ASC
) logs
WHERE rn % ((SELECT tot_vals FROM count) / 1440) = 0;