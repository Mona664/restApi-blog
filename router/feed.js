const express = require('express');
const { body } = require('express-validator');
const controller = require('../controller/feed');
const router  = express.Router();
const isAuth = require('../middleware/is-auth')


// post
router.get('/posts',isAuth , controller.getPosts);

router.post('/post',isAuth  ,[
    body('title').trim().isLength({min : 5}),
    body('content').trim().isLength({min : 5}),
], controller.createPosts);

router.get('/post/:postId',isAuth  , controller.getPost);

router.put('/editPost/:postId',isAuth ,[
    body('title').trim().isLength({min : 5}),
    body('content').trim().isLength({min : 5}),
],  controller.editPost)

router.delete('/deletePost/:postId',isAuth  , controller.deletePost);
module.exports =router