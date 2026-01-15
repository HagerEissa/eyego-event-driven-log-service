const logRepo = require('../../infrastructure/repositories/log.repository.mongo');

const createLog = async (logData) => {
  return await logRepo.save(logData);
};

module.exports = { createLog };
