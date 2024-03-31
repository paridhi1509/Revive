const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose any port you prefer

app.use(bodyParser.json());

// In-memory database (replace this with a real database like MongoDB or MySQL)
let moods = [];

// Define API routes
app.get('/api/moods', (req, res) => {
  res.json(moods);
});

app.post('/api/moods', (req, res) => {
  const newMood = req.body;
  moods.push(newMood);
  res.status(201).json(newMood);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
