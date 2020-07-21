var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Eagle's Nest",
        image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, nisi quasi temporibus inventore velit saepe corrupti nihil id nostrum vitae cupiditate officiis non maiores culpa recusandae illo alias fugiat sed voluptate ipsum iure animi quis voluptates? Cum aperiam magnam facilis nisi veniam maiores natus omnis. Sunt possimus deleniti similique."
    },
    {
        name: "Shanuu Chai adda",
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, nisi quasi temporibus inventore velit saepe corrupti nihil id nostrum vitae cupiditate officiis non maiores culpa recusandae illo alias fugiat sed voluptate ipsum iure animi quis voluptates? Cum aperiam magnam facilis nisi veniam maiores natus omnis. Sunt possimus deleniti similique."
    },
    {
        name: "Rosh Post",
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio, nisi quasi temporibus inventore velit saepe corrupti nihil id nostrum vitae cupiditate officiis non maiores culpa recusandae illo alias fugiat sed voluptate ipsum iure animi quis voluptates? Cum aperiam magnam facilis nisi veniam maiores natus omnis. Sunt possimus deleniti similique."
    }
]

function seedDB(){
    // Remove all Comments
    // Comment.deleteMany({}, (err)=>{
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log("deleted all comments");
    //     }
        // Remove all Campgrounds
        Campground.deleteMany({}, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log("removed campgrounds!");
            }
            // add a few campgrounds
            // data.forEach((seed)=>{
            //     Campground.create(seed, (err, campground)=> {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("added a campground");
            //             //create a comment
            //             Comment.create(
            //             {
            //                 text: "This place is great, but I wish there was internet",
            //                 author: "Homer"
            //             }, (err, comment) => {
            //                 if (err) {
            //                     console.log(err);
            //                 } else {
            //                     campground.comments.push(comment);
            //                     campground.save();
            //                     console.log("Created new comment");
            //                 }
            //             });
            //         }
            //     });
                
            // });
        });
        // add a few comments
    // });
}



module.exports = seedDB;

/*
LIST OF CAMPGROUND IMAGES
https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png
https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275_960_720.jpg
https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_960_720.jpg
https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_960_720.jpg
https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_960_720.jpg
https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg
*/

