var post = require("../controllers/Post.Controller");
const { check, validationResult } = require('express-validator');

var VerifyToken = require('./middleware.js');
module.exports = (app) => {
    app.post("/post", [
        VerifyToken,
        check('content').trim().escape(),
        check('title').trim().escape(),
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        post.create(req, res)
    });
};