if(process.env.NODE_ENV === "production"){
	export const ROOT_URL = 'http://localhost:8000';
}else{
	export const ROOT_URL = 'https://cet-database.herokuapp.com/';
}
