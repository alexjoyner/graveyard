SELECT 
  id, name, settings 
FROM 
  point 
WHERE 
  client_id = $1;