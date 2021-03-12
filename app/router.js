const express = require('express');

const runController = require('./controllers/runController');
const userController = require('./controllers/userController');

//middlewares
const adminMW = require('./middlewares/adminMW');

const router = express.Router();

// Page d'acceuil
router.get('/', runController.getAllruns);

// Administration
router.get('/login', userController.loginForm);
router.post('/login', userController.handleLoginForm)
router.get('/admin', adminMW, userController.adminPage);

module.exports = router;