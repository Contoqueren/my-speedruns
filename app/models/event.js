const Sequelize = require('sequelize');
const sequelize = require('../database');

class Event extends Sequelize.Model {};

Event.init({
    name: Sequelize.STRING,
    start_year: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "event"
});

module.exports = Event;