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
        console.log(data)
        return res.render('home', {data:data})
    });
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