const logRepo = require('../../infrastructure/repositories/log.repository.mongo');

const getLogs = async ({ page, limit, filter }) => {
  return await logRepo.getAll({ page, limit, filter });
};

module.exports = { getLogs };
