export const ROOT_URL =
	(process.env.NODE_ENV === "production")?
		'https://cet-database.herokuapp.com' :
		'http://localhost:8000';
