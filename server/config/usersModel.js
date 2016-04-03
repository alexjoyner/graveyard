'use strict';
// Dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// Main schema
// ----------------------------
var usersSchema = new Schema({
    profile: {
        firstName: String,
        lastName: String,
        mobileNum: String,
    },
    role: String,
    local: {
        username: String,
        password: String
    }
});

// usersSchema.methods.generateToken = function() {
//     var token = new Token();
//     token.value = 'test value';
//     token.user = this._id;
//     this.token = token._id;
//     this.save(function(err) {
//         if (err) throw err;
//         token.save(function(err) {
//             if (err) throw err;
//         });
//     });
// };


usersSchema.methods.generateHash = function(pass) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(pass, salt);
    // Store hash in your password DB. 
    return hash;
};
usersSchema.methods.validPassword = function(pass) {
    // Load hash from your password DB. 
    return bcrypt.compareSync(pass, this.local.password);
};

// var User = mongoose.model('users', usersSchema);
// var Token = mongoose.model('Token', tokenSchema);
// var Models = {
//     user: User,
//     Token: Token
// };

module.exports = mongoose.model('users', usersSchema);