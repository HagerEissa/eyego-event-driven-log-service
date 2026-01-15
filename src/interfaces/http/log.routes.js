const express = require('express');
const router = express.Router();
const { createLogController, getLogsController } = require('./log.controller');

router.post('/logs', createLogController);
router.get('/logs', getLogsController);

module.exports = router;
