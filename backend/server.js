const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5453;

const client = new MongoClient("mongodb://localhost:27017");
let db;

client.connect()
  .then(clientInstance => {
    db = clientInstance.db("bigbus");
    console.log("✅ Connected to MongoDB");
  })
  .catch(err => console.error("❌ Failed to connect to MongoDB", err));

app.post("/userdetails", (req, res) => {
  if (!db) {
    return res.status(500).send({
      success: false,
      message: "Database not connected yet",
    });
  }

  const user = req.body;

  db.collection("seat").insertOne(user)
    .then(() => {
      console.log("✅ Data stored:", user);
      res.send({
        success: true,
        message: "User data inserted",
      });
    })
    .catch(err => {
      console.error("❌ Data not stored", err);
      res.status(500).send({
        success: false,
        message: "Insert failed",
      });
    });
});

// ✅ GET Route to send booking data to frontend
app.get("/userdetails", (req, res) => {
  if (!db) {
    return res.status(500).send({
      success: false,
      message: "Database not connected yet",
    });
  }

  db.collection("seat")
    .find({})
    .toArray()
    .then(users => {
      res.send(users); // Send all user data
    })
    .catch(err => {
      console.error("❌ Failed to fetch users", err);
      res.status(500).send({
        success: false,
        message: "Failed to retrieve data",
      });
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
