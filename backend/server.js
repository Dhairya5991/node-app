const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend API is running");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working", version: "v1" });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "portfolio-backend",
    timestamp: new Date().toISOString()
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required"
    });
  }

  console.log("📩 Contact Request:", { name, email, message });

  res.status(200).json({
    success: true,
    message: "Message received successfully"
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

