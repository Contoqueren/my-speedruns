const express = require('express');

const runController = require('./controllers/runController');

//middlewares
const adminMW = require('./middlewares/adminMW');

const router = express.Router();

// Page d'acceuil
router.get('/', runController.getAllruns)

module.exports = router;