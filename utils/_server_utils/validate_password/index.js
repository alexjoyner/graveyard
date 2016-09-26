var bcrypt = require('bcrypt');
export function validate_password(pass, realPass){
	// Load hash from your password DB.
	return bcrypt.compareSync(pass, realPass);
};