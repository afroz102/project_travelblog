//importing mongoose
const mongoose = require('mongoose');
const moment = require('moment');
const currentTime = moment().format('lll');
console.log("current time>>>",currentTime);

//Schema
const postSchema = new mongoose.Schema(
    [{
        post: String,
        imageUrl: String,
        date: { type: Date, default: currentTime }
    }],
    {
        collection: 'posts'
    }
);

const UserPost = mongoose.model('posts', postSchema);

module.exports = UserPost;