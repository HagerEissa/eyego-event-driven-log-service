const logModel = require("../database/log.model");

const save = async (log) => {
  return await logModel.create(log);
};

const getAll = async ({ page = 1, limit = 10, filter = {} }) => {
  const skip = (page - 1) * limit;
  const totalItems = await logModel.countDocuments(filter);
  const logs = await logModel
    .find(filter)
    .sort({ timestamp: -1 })
    .skip(skip)
    .limit(limit);

  const totalPages = Math.ceil(totalItems / limit);

  return {
    data: logs,
    pagination: {
      page,
      limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
};

module.exports = { save, getAll };
