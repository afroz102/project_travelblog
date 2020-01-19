const PostController = {};
const PostModel = require('./../models/Post');
const CommentModel = require('./../models/PostComment');

PostController.getPost = function (req,res) {
    console.log(req.body);
    PostModel.find();
    res.render();
}
PostController.addPost = function (req,res) {
    res.render('addBlog');
}
PostController.addNewPost = function(req, res){
    //console.log(req.body)
    PostModel.create(req.body, (error, post) => {
        res.redirect('/')
    })
}
PostController.postComment = function (req,res) {
    res.render();
}
module.exports = PostController;