var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
const { request } = require("express");

router.get("/", (req, res) => {
    res.render("landing");
    // res.redirect("/campgrounds")
})


// ===================
// AUTH ROUTES
// ===================

// register form show
router.get("/register", (req, res) => {
    res.render("register");
});

// handle register logic
router.post("/register", (req,res)=>{
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=>{
        if(err) {
            req.flash("error", err.message);
            return res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, ()=>{
                req.flash("success", "Registered "+user.username);
                res.redirect("/campgrounds");
            });
        }
    });
});

// show login form
router.get("/login", (req, res)=> {
    res.render("login");
});

// handle login logic
router.post("/login",  passport.authenticate("local", {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), (req, res) => {
});

// logout route
router.get("/logout", (req, res)=> {
    req.logout();
    req.flash("success", "Logged You Out!")
    res.redirect("/campgrounds");
});


module.exports = router;