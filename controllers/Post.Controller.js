const mongoose = require('mongoose'),
    Response = require('./response');
const Post = mongoose.model('Post');

exports.create = async (req, res) => {
    const post = new Post({...req.body, author: req.userId, comments: []});
    return post.save().then(() => {
        return res.status(200).json(Response.create(
            true,
            'Post created.',
            null
        ));
    })
    .catch((err) => {
        console.error(err);
        return res.status(404).json(err);
    });
}