# Eyego Event-Driven Logging Microservice

A scalable event-driven microservice built with **Node.js, Express, Kafka, and MongoDB** for real-time processing of user activity logs.

This project is designed following **Domain-Driven Design (DDD)** principles and demonstrates asynchronous communication using Kafka.

---

## 🏗 Architecture Overview

- **Producer**: Receives user activity logs via REST API and publishes them to Kafka.
- **Consumer**: Consumes logs from Kafka and stores them in MongoDB.
- **Database**: MongoDB with indexing for efficient querying.
- **Messaging**: Apache Kafka for real-time event processing.
- **Deployment**: Docker & Docker Compose.

---

## 🧩 Tech Stack

- Node.js
- Express.js
- Apache Kafka (KafkaJS)
- MongoDB & Mongoose
- Docker & Docker Compose

---

## 📁 Project Structure (DDD)

src/
├── domain/ # Business entities & interfaces
├── application/ # Use cases
├── infrastructure/ # Kafka, MongoDB implementations
├── interfaces/ # HTTP controllers & routes


---

## 🚀 Getting Started


### 1️⃣ Clone the repository
bash
git clone https://github.com/USERNAME/REPO_NAME.git
cd eyego-event-driven-log-service

---

### 2️⃣ Environment Variables
PORT=3000
DB_URI=mongodb://mongo:27017/eyego
KAFKA_BROKER=kafka:29092

---

### 3️⃣ Run using Docker Compose
docker-compose up --build


---

##  API Endpoints

POST /logs

Request Body:
{
  "userId": "123",
  "action": "login"
}

---

Get Logs (Pagination & Filtering)
GET /logs?page=1&limit=10&userId=123

[
  {
    "userId": "123",
    "action": "login",
    "timestamp": "2026-01-14T14:58:01.000Z"
  }
]


## Pagination & Filtering

Pagination is implemented using page and limit query parameters

Filtering is supported by userId

Logs are sorted by timestamp (latest first)

### Kafka

Topic name: user-logs

Producer publishes user activity logs

Consumer processes logs asynchronously and stores them in MongoDB