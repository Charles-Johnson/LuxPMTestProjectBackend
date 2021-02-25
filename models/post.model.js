var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    postedAt: { type: Date, required: true, default: Date.now },
    comments: [{
        postedAt: { type: Date, required: true, default: Date.now },
        author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
        content: { type: String, required: true },
    }]
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;