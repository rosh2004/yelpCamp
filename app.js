var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash   = require("connect-flash"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds");

// requireing routes
var indexRoutes         = require("./routes/index"),
    campgroundRoutes    = require("./routes/campgrounds"),
    commentRoutes       = require("./routes/comments");
    
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/yelp_camp_v9');

app.use(bodyParser.urlencoded({ extended:true }));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); // Seed teh databse

// PASSPORT CONFIGURATUION
app.use(require("express-session")({
    secret: "Rusty is really chubby",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// CUSTOM MIDDLEWARE
app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ROUTES

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`the YelpCamp Server has started on port: ${PORT} `);
});