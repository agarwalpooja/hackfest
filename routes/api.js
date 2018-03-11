const express = require ('express');
const router = express.Router();
const User = require('../model/user');

var isLoggedIn = false;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
      isLoggedIn = true;
    }
    else isLoggedIn = false;
    res.render('./public/home', {"isLoggedIn" : isLoggedIn});
});

router.get("/login", function(req, res, next) {
    // if (req.session.user) {
    //     //if (req.session.user === "admin") res.redirect('/admin');
    //     res.redirect('/foodhub');
    // }
    res.render("./public/foodhub");
});

//router.get("/admin", admin.displayAll);

router.get("/foodhub", function(req, res) {
   // if (req.session.user) {
       // if (req.session.user === "admin") res.redirect('/admin');
        res.render('/foodhub', { "details": req.session.user });
    //} else res.redirect("/login");
});

// get a list of ninjas from the db
router.get('/users', function(req, res, next){
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

// update a ninja in the db
router.put('/users/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});

module.exports = router;