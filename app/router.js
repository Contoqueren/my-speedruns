const express = require('express');

const runController = require('./controllers/runController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');
const eventController = require('./controllers/eventController');

//middlewares
const adminMW = require('./middlewares/adminMW');

const router = express.Router();

// Page d'acceuil
router.get('/', gameController.getAllGames);

// Administration
router.get('/login', userController.loginForm);
router.post('/login', userController.handleLoginForm);
router.get('/admin', adminMW, userController.adminPage);

// Route pour les runs
router.post('/admin/addrun', adminMW, runController.createRun);
router.post('/admin/deleterun', adminMW, runController.deleteRun);
router.get('/run/:id', runController.runsByYear);

// Route pour les jeux
router.post('/admin/addgame', adminMW, gameController.createGame);
router.post('/admin/deletegame', adminMW, gameController.deleteGame);
router.get('/game/:id', gameController.gameById);

// Route pour les events
router.post('/admin/addevent', adminMW, eventController.createEvent);
router.post('/admin/deleteevent', adminMW, eventController.deleteEvent);
router.get('/event/:id', eventController.eventById);


module.exports = router;