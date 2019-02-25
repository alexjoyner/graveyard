SELECT 
  id, username 
FROM 
  point_group 
WHERE 
  client_id = $1;