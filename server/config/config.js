var ENV = process.env.NODE_ENV || 'development'; // development || production
var db = ''
if(ENV === 'production'){
	db = 'mongodb://rosco9awj:1_Password@ds025459.mlab.com:25459/metatruth';
}else{
	db = 'mongodb://localhost:27017/metaTruth';
}


module.exports = {
    'secret': 'thisisareallycoolsecretpassword',
    'db': db
};