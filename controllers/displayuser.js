var mongoose = require('mongoose');
var UserModel = require('../models/user');
var showdata = function(req, res){
    var query = UserModel.find();
    query.select('registration_no');
    query.exec(function(err,regis){
        if(err) throw err;
        console.log(regis);
        res.render("foodhub" , {"userModel":regis});
    });
}
module.exports = { "showdata":showdata};