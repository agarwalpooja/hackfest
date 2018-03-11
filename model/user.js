var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var userSchema = new Schema({

    name : { type : String , required : true},
    emailid : { type : String , unique : true , required : true},
    password : { type : String , required : true},
    contact : { type : String , required : true},
    isVerified : { type: Boolean, default: true },
    Breakfast: { type:String },
    lunch: {type:String},
    dinner:{ type:String},
    registration_no : {type:String, required : true}
});


var userModel = mongoose.model('user', userSchema );

module.exports = userModel;

module.exports.saveUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB.
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
