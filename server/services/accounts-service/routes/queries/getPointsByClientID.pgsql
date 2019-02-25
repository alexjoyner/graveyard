SELECT 
  id, username, settings 
FROM 
  point 
WHERE 
  client_id = $1;