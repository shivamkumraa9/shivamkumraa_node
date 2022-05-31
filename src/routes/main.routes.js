const express = require('express');

const router = express.Router();
const controller = require('../controllers/main.controller');

router.get('/', controller.home);
router.get('/contact', controller.contact);
router.get('/terms', controller.terms);
router.get('/privacy', controller.privacy);
router.get('/sitemap.xml', controller.sitemap);

module.exports = router;
