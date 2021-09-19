const express = require('express');
const route = express.Router();

const appointmentController = require('./controllers/appointmentController')

module.exports = route;

route.get('/atendimentos', appointmentController.appointment);
route.post('/atendimentos', appointmentController.meupost);