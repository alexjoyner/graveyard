export const ROOT_URL =
	(process.env.NODE_ENV === "production")?
		'ENTER_PRODUCTION_SERVER_ADDRESS' :
		'http://localhost:8000';
