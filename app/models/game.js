const Sequelize = require('sequelize');
const sequelize = require('../database');

class Game extends Sequelize.Model {};

Game.init({
    title: Sequelize.STRING,
}, {
    sequelize,
    tableName: "game"
});

module.exports = Game;