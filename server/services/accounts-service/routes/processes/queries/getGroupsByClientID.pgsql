SELECT 
  id, name 
FROM 
  point_group 
WHERE 
  client_id = $1;