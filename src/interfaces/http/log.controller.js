const { createLog } = require('../../application/log/createLog.usecase');
const { getLogs } = require('../../application/log/getLogs.usecase');
const { produceLog } = require('../../infrastructure/kafka/producer');

const createLogController = async (req, res) => {
  try {
    const log = req.body;
    await produceLog(log); // send to Kafka
    res.status(201).json({ message: 'Log produced to Kafka', log });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLogsController = async (req, res) => {
  try {
    const { page = 1, limit = 10, userId } = req.query;
    const filter = userId ? { userId } : {};
    const logs = await getLogs({ page: parseInt(page), limit: parseInt(limit), filter });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createLogController, getLogsController };
