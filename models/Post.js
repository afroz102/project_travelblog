//importing mongoose
const mongoose = require('mongoose');
const moment = require('moment');
const currentTime = moment().format('lll');
// console.log("current time>>>",currentTime);

//Schema
const postSchema = new mongoose.Schema(
    [{
        title: String,
        description: String,
        content: String,
        image: String,
        date: { type: Date, default: currentTime }
    }],
    {
        collection: 'posts'
    }
);

const UserPost = mongoose.model('posts', postSchema);

module.exports = UserPost;