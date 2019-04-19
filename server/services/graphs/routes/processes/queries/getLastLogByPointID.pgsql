SELECT 
    date_part('epoch', datetime AT TIME ZONE $2) * 1000 as datetime, 
    val
FROM 
    log 
WHERE 
    point_id = $1
ORDER BY
    datetime DESC
LIMIT 1;