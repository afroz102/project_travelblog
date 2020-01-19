const PostController = {};
const PostModel = require('./../models/Post');
const CommentModel = require('./../models/PostComment');

PostController.getPost = function (req,res) {
    PostModel.find({},function (error, data) {
        if (error) {
            res.status(500).send({
                status: false,
                message: error
            });
        }
        console.log("data",data);
        return res.render('home', {
            status:true,
            data: data.reverse()
        });
    });
}
PostController.addPost = function (req,res) {
    res.render('addBlog');
}
PostController.addNewPost = function(req, res){
    // var data = req.body;
    // console.log("Post data", data);
    PostModel.create(req.body, (error, post) => {
        res.redirect('/');
    });
}
PostController.postComment = function (req,res) {
    res.render();
}
module.exports = PostController;