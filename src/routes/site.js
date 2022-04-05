const express = require('express');
// const { index123 } = require('../app/controllers/NewControllers');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteControllers')

router.use('/search', siteControllers.search)
router.use('/', siteControllers.home)

module.exports = router;
