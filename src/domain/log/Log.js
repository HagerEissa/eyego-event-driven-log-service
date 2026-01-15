// مجرد factory function لإنشاء log
const createLog = ({ userId, action, timestamp = new Date() }) => ({
  userId,
  action,
  timestamp
});

module.exports = { createLog };
