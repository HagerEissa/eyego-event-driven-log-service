const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Indexing for faster queries
logSchema.index({ userId: 1, timestamp: -1 });

module.exports = mongoose.model("Log", logSchema);
