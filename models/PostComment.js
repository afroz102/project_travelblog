const mongoose = require('mongoose');
const moment = require('moment');
const currentTime = moment().format('lll');
console.log("current time>>>",currentTime);

//Schema
const commentSchema = new mongoose.Schema(
    [{
        name: String,
        email: String,
        comments: String,
        date: { type: Date, default: currentTime }
    }],
    {
        collection: 'comments'
    }
);

const UserComments = mongoose.model('comments', commentSchema);

module.exports = UserComments;