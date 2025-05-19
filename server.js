const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sea-freight-calculator', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Container calculation endpoint
app.post('/api/calculate', (req, res) => {
  const { length, width, height, quantity } = req.body;
  
  // Calculate CBM
  const cbm = (length / 100) * (width / 100) * (height / 100) * quantity;
  
  // Determine container type
  let suggestedContainer;
  if (cbm <= 28) {
    suggestedContainer = "20ft Container";
  } else if (cbm <= 58) {
    suggestedContainer = "40ft Container";
  } else {
    suggestedContainer = "Requires multiple containers or 40HC";
  }

  res.json({
    cbm: cbm.toFixed(3),
    suggestedContainer,
    totalWeight: (cbm * 167).toFixed(2) // Rough weight estimation (167 kg per CBM)
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 