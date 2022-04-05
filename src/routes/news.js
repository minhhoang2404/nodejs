const express = require('express');
// const { index123 } = require('../app/controllers/NewControllers');
const router = express.Router();

const newControllers = require('../app/controllers/NewControllers')

router.use('/:slug', newControllers.show)
router.use('/', newControllers.index)

module.exports = router;
