const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseControllers')

router.use('/create', courseControllers.create)
router.use('/:slug', courseControllers.show)

module.exports = router;
