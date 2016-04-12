var ENV = process.env.NODE_ENV || 'development'; // development || production
var db = ''
if(ENV === 'production'){
	db = 'postgres://roscoDB:1_Password@metatruth-db.cuzf3tkrekn0.us-east-1.rds.amazonaws.com:5432/metatruth';
}else{
	db = "postgres://rosco:@localhost:5432/postgres";
}


module.exports = {
    'secret': 'thisisareallycoolsecretpassword',
    'db': db
};