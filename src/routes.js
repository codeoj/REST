const express = require('express');
const route = express.Router();

const giftController = require('./controllers/giftController')

// Routes
route.post('/lista', giftController.homeGift);


module.exports = route;