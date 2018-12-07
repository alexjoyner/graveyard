WITH special_vals AS (
    SELECT 
    	count(*) as tot_vals,
    	(AVG(val) - STDDEV_SAMP(val) * 2.5) as lower_bound,
        (AVG(val) + STDDEV_SAMP(val) * 2.5) as upper_bound
    FROM log
	WHERE 
		point_id = $1
)
SELECT datetime, val FROM(
	SELECT 
	    date_part('epoch', datetime) * 1000 as datetime, 
	    val,
    	ROW_NUMBER() OVER (ORDER BY datetime asc) as rn
	FROM 
	    log 
	WHERE 
	    point_id = $1
	ORDER BY
		datetime ASC
) logs
WHERE
CASE 
	WHEN ((SELECT tot_vals FROM special_vals) > 1441) THEN
		rn % ((SELECT tot_vals FROM special_vals) / 1440) = 0
		OR
		val < (SELECT lower_bound FROM special_vals) 
		OR 
		val > (SELECT upper_bound FROM special_vals) 
	ELSE
		rn > 0
	END;