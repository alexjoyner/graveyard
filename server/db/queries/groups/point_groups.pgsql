SELECT id, name FROM point_group WHERE client_id = 1;

SELECT 
	point.*
FROM point_group_x_point 
INNER JOIN
	point
ON
	(point_group_x_point.point_id = point.id)
WHERE 
	point_group_id = 1;