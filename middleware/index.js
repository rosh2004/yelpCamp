var Campground = require("../models/campground")
var Comment = require("../models/comment")

var middlewareObj = {};
middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, (err, campground)=>{
    
            if(err || !campground) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                // does user own the campground
                if(campground.author.id.equals(req.user._id)){
                    next();
                } else {
                    // otherwise, redirect
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
                
            }
        });
    } else {
        //if not, redirect
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}


middlewareObj.checkCommentOwnership = function(req, res, next){
    // is logged in
    if(req.isAuthenticated()){
        // owns the comment
        Comment.findById(req.params.comment_id, (err, comment)=>{
            if(err || !comment) {
                res.redirect("back");
            } else {
                if(comment.author.id.equals(req.user._id)){
                    next();
                // else redirect
                } else {
                    res.redirect("back");
                }
            }
        });

    // else redirect
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("/back");
    }
}



middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that")
    res.redirect("/login");
};

module.exports = middlewareObj;