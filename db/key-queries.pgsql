-- Select all logs for a given point between two points in time
--     returned as an array
SELECT 
    array[date_part('epoch', datetime), val]
FROM 
    log 
WHERE 
    point_id = 1 AND datetime BETWEEN '2018-07-31 10:00:00' AND '2018-07-31 10:20:00';

-- Select all logs for a given point
--     returned as an array
SELECT 
    array[date_part('epoch', datetime), val]
FROM 
    log 
WHERE 
    point_id = 1;

