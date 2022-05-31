const express = require('express');

const router = express.Router();
const controller = require('../controllers/blog.controller');

router.get('/p/:number', controller.blog);
router.get('/:url', controller.single);

module.exports = router;
