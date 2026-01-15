const { Kafka } = require("kafkajs");

const kafka = new Kafka({   
  clientId: "log-producer", 
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],  
});

const producer = kafka.producer(); 
let isConnected = false;

const produceLog = async (log) => {
  if (!isConnected) {
    await producer.connect();
    isConnected = true;
  }
  await producer.send({
    topic: "user-logs",
    messages: [{ value: JSON.stringify(log) }],
  });
};

module.exports = { produceLog };
