var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground")
var Comment = require("../models/comment");
const user = require("../models/user");
var middleware = require("../middleware")

// COMMENTS NEW
router.get("/new", middleware.isLoggedIn, (req, res)=> {
    // find campground by id
    Campground.findById(req.params.id, (err, foundCampground)=>{
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground:foundCampground})
        }
    });
});

// COMMENTS CREATE
router.post("/", middleware.isLoggedIn, (req,res)=>{
    // lookup campground using ID
    Campground.findById(req.params.id, (err, campground)=>{
        if (err){
            console.log(err);
            res.redirect("campgrounds")
        } else {
            //create new comment
            Comment.create(req.body.comment, (err, comment)=>{
                if (err) {
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    campground.comments.push(comment);
                    campground.save();
                    //redirect campground show page
                    req.flash("success", "Successfully Created Comment")
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
            
        }
    });
});

// Comments edit
router.get("/:comment_id/edit", middleware.checkCommentOwnership, (req, res) =>{
    Comment.findById(req.params.comment_id, (err, comment)=> {
            res.render("comments/edit", {comment:comment, campground_id:req.params.id});
    });
});

// Comments Update
router.put("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, comment)=> {
        if (err) {
            console.log(err);
            res.redirect("back")
        } else {
            req.flash("success", "Edited Comment")
            res.redirect(`/campgrounds/${req.params.id}`)
        }
    });
});

// Comment Destroy
router.delete("/:comment_id", middleware.checkCommentOwnership, (req, res)=>{
    Comment.findByIdAndDelete(req.params.comment_id, (err)=>{
        if(err) {
            console.log(err);
            res.redirect("back");
        } else {
            req.flash("success","Deleted Comment")
            res.redirect("back");
        }
    });
});


module.exports = router;
