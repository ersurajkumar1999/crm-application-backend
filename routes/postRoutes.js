const express = require('express');
const router = express.Router();
const { auth, isAdmin, isUser } = require('../middlewares/authMiddleware');
const { create, getPosts, postLike, postUnLike } = require('../controllers/PostController');

router.post('/post/create', create);
router.post('/posts', getPosts);
// router.get('/state/:id', checkHome);
// router.put('/state/:id', checkHome);
// router.delete('/state/:id', checkHome)
router.put('/like', auth, postLike);
router.put('/unlike', auth, postUnLike);

module.exports = router;