const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./utils/db');

connectDB();

const app = express();

app.use(cors());

app.use('/api/user', userRoutes);

module.exports = app;
