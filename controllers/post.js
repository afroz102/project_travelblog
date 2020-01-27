const PostController = {};
const PostModel = require('./../models/Post');
// const CommentModel = require('./../models/PostComment');

// Import async
const async = require('async');

// Import and set cloudinary configuration
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || "dougxmqdw",
    api_key: process.env.API_KEY || "374497738569243",
    api_secret: process.env.API_SECRET || "0JNw5118EPgTJwJ0Pi05-IaY97A"
});


PostController.getPost = function (req, res) {
    PostModel.find({}, function (error, data) {
        if (error) {
            res.status(500).send({
                status: false,
                message: error
            });
        }
        // console.log("data", data);
        return res.render('home', {
            status: true,
            data: data.reverse()
        });
    });
}
PostController.addPost = function (req, res) {
    res.render('addBlog');
}


PostController.addNewPost = async function (req, res) {
    var data = req.body;
    var imagefiles = req.files;
    console.log("data", data);
    console.log("imagefile", imagefiles);
    var cloudinaryImgUrl = null;
    if (imagefiles['image']) {
        await cloudinary.uploader.upload(imagefiles['image'][0].path, function (error, response) {
            if (error) {
                console.log("image file not uploaded to cloudinary>>", error);
                return error;
            }
            console.log("response from image section cloudinary", response);
            cloudinaryImgUrl = response.url;
            console.log("cloudinaryUrl", cloudinaryImgUrl);
        });
    }
    console.log("outside cloudinaryUrl", cloudinaryImgUrl);
    PostModel.create({
        title: data.title,
        description: data.description,
        content: data.content,
        image: cloudinaryImgUrl
    }, function (error, data) {
        if (error) {
            console.log("FAiled to save post to database. Error", error);
            return error;
        }
        console.log("added to database", data);
        res.redirect('/');
    });
}
// PostController.postComment = function (req, res) {
//     res.render();
// }
PostController.login = function (req, res) {
    // var email = req.body.email;
    // console.log("req.body", req.body);
    var plain_password = req.body.password;
    console.log("password: ", password);

    if (password == "xyz@abc") {
        console.log('Successfully logged in');
        setTimeout(function () {          //to mimmick latency and let animations flow
            return res.redirect('/post/new');
        }, 40);
    }
    else {
        res.status(500).send({
            message: "Invalid Credantials",
            status: false
        });
        // res.status(500).render('login', {
        //     msg: "Invalid Credantials",
        //     status: false
        // });
    }
};
module.exports = PostController;