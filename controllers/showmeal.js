var mongoose = require('mongoose');
var UserModel = require('../models/user');
var dispmeal = function(req, res){
    var query = UserModel.find();
    query.select('registration_no name');
    query.exec(function(err,reg){
        if(err) throw err;
        console.log(reg);
        res.render("foodhub" , {"userModel":reg});
    });
}
module.exports = { "dispmeal":dispmeal};