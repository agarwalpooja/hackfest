var express = require('express');
var router = express.Router();

var register = require("../controllers/register");


var login = require("../controllers/login");

var logout = require("../controllers/logout");

var displayuser = require("../controllers/displayuser");

var showmeal = require("../controllers/showmeal");


router.get("/" , function(req,res){
    res.json({"msg" : "hello world"})
})

router.post("/register" , register.createUser );

router.post("/login" , login.userAuthenticate );

router.get("/logout" , logout.userDestroy );

router.get("/foodhub" , displayuser.showdata);

module.exports = router;
