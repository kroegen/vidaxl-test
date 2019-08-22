const express = require('express');
const router  = express.Router();

const sessions  = require('./sessions');
const tasks     = require('./tasks');

router.use('/sessions', sessions);
router.use('/tasks', tasks);

module.exports = router;
