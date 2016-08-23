var bcrypt = require('bcrypt');
module.exports = function(pass, realPass){
	// Load hash from your password DB.
	return bcrypt.compareSync(pass, realPass);
};