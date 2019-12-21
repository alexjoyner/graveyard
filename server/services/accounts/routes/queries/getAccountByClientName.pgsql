SELECT 
  id, username, password
FROM 
  client
WHERE 
  username = $1;