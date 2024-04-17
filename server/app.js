const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

// Allow CORS for all routes
app.use(cors());

// Serve static files (like HTML, CSS, and JS)
app.use(express.static('public'));

// Endpoint to get sponsor data
app.get('/sponsors', (req, res) => {
  fs.readFile('sponsors.json', (err, data) => {
    console.log(data);
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});