WITH bounds AS (
    SELECT (AVG(net_worth) - STDDEV_SAMP(net_worth) * 2) as lower_bound,
           (AVG(net_worth) + STDDEV_SAMP(net_worth) * 2) as upper_bound
    FROM building
)
SELECT *
FROM building
WHERE 
	net_worth < (SELECT lower_bound FROM bounds) 
	OR 
	net_worth > (SELECT upper_bound FROM bounds);
	
	
WITH bounds AS (
    SELECT (AVG(val) - STDDEV_SAMP(val) * 2.5) as lower_bound,
           (AVG(val) + STDDEV_SAMP(val) * 2.5) as upper_bound
    FROM log
)
SELECT *
FROM log
WHERE 
	val < (SELECT lower_bound FROM bounds) 
	OR 
	val > (SELECT upper_bound FROM bounds);
	
	
