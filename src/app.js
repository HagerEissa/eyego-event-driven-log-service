const express = require('express');

const logRoutes = require('./interfaces/http/log.routes');
const connectDB = require('./infrastructure/database/mongo');
const { consumeLogs } = require('./infrastructure/kafka/consumer');

const app = express();
app.use(express.json());

app.use('/api', logRoutes);

connectDB();        // Connect MongoDB
consumeLogs();      // Start Kafka consumer

module.exports = app;
