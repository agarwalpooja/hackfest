var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var UserModel = require('../models/user');
var createUser = function (req, res) {
    req.body.emailid = req.body.emailid.toLowerCase().trim();
    UserModel.findOne({ "emailid": req.body.emailid }, function (err, doc) {

        if (!doc) {
            var newUser = new UserModel(req.body);

            //newUser.xtasyid

            UserModel.saveUser(newUser, function (err, doc) {
                if (err) throw err;
                console.log(doc);
                res.json({ "msg": 'Successfully Registered!' });

                // res.json(doc);
            });

        } else {
            console.log("emailid already taken");
            res.json({ "msg": "EmailID Already Registered!" });
        }
    });

}
