const { Kafka } = require("kafkajs");

const kafka = new Kafka({   //here we create a kafka instance 
  clientId: "log-producer",  //give a name to the producer
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],  //here we specify the kafka broker address
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
