const express = require("express");
const redis = require("redis");

// Create an instance of express
const app = express();

// Replace with your actual Redis endpoint details
const redisClient = redis.createClient({
  url: "redis://default:dxZNcuCrNfMQ9TD39Ywq2zIy3Qt60xye@redis-16083.c267.us-east-1-4.ec2.cloud.redislabs.com:16083",
});

// Start the Redis client connection
redisClient.connect().catch(console.error);

// Endpoint to set the color in Redis
app.get("/set-color", async (req, res) => {
  try {
    await redisClient.set("color", "#A6D12E");
    console.log('Set key "color" with value "#A6D12E"');
    res.send("Color set successfully");
  } catch (error) {
    console.error(`Error setting color: ${error}`);
    res.status(500).send("Error setting color");
  }
});

// Endpoint to get the color from Redis
app.get("/get-color", async (req, res) => {
  try {
    const value = await redisClient.get("color");
    console.log(`Retrieved key "color" with value: ${value}`);
    res.json({ color: value });
  } catch (error) {
    console.error(`Error retrieving color: ${error}`);
    res.status(500).send("Error retrieving color");
  }
});

// Choose a port for your server
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
