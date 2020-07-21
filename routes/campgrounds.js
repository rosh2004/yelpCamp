var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware")


// CAMPGROUND INDEX - show all campgrounds
router.get("/", (req,res)=>{
    // Get all campgrounds from DB
    Campground.find({},(err,campgrounds)=>{
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds:campgrounds});
        }
    });
});


// CAMPGROUND CREATE - Add new route to DB
router.post("/", middleware.isLoggedIn, (req,res) => {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id:req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image:image, description:desc, author:author}
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated)=>{
        if(err){
            req.flash("error", "Something went wrong")
            console.log(err);
            res.redirect("/");
        } else{
            // redirect back to campgrounds page
            req.flash("success", "Successfully created campground")
            res.redirect("/campgrounds")
        }
    });
});

// CAMPGROUND NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, (req,res) => {
    res.render("campgrounds/new");
});

// CAMPGROUND SHOW - show info about one dog
router.get("/:id",(req,res)=>{
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec((err, campground)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: campground});
        }
    });
});

// EDIT CAMPGROUND ROUTE

router.get("/:id/edit", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findById(req.params.id, (err, campground)=>{
        res.render("campgrounds/edit", {campground:campground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground)=>{
        if(err){
            console.log(err);
            res.redirect(`/campgrounds`)
        } else {
            res.redirect(`/campgrounds/${req.params.id}`)
        }
    });
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, (req, res)=> {
    Campground.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
            req.flash("error", "Couldn't delete Campground");
            res.redirect("/campgrounds")
        } else {
            req.flash("success", "Deleted Campground");
            res.redirect("/campgrounds") 
        }
    });
});



module.exports = router;