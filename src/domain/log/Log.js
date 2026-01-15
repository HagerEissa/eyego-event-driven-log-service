//  factory function  
const createLog = ({ userId, action, timestamp = new Date() }) => ({
  userId,
  action,
  timestamp
});

module.exports = { createLog };
