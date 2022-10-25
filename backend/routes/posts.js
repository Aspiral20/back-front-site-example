const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

// Submits a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Specific Post
router.get('/:postId', async (req, res) => {
    try {
        const findPost = await Post.findById(req.params.postId)
        res.status(200).json(findPost);
        console.log(req.params.postId);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.status(200).json(removedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

// Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title, description: req.body.description } }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

module.exports = router;