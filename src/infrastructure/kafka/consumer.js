const { Kafka } = require("kafkajs");
const logRepo = require("../repositories/log.repository.mongo");

const kafka = new Kafka({
  clientId: "log-consumer",
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "log-group" });

const consumeLogs = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-logs", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const log = JSON.parse(message.value.toString()); 
      await logRepo.save(log);
      console.log("Saved log:", log);
    },
  });
};

module.exports = { consumeLogs };
