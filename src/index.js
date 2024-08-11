// Importing necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bannerRoutes = require('./routes/bannerRoutes');

// Initialize Express app
const app = express();

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

// Use the banner routes for handling banner-related API requests
app.use('/api', bannerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
