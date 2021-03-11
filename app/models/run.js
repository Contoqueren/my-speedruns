const Sequelize = require('sequelize');
const sequelize = require('../database');

class Run extends Sequelize.Model {};

Run.init({
    category: Sequelize.STRING,
    video: Sequelize.STRING,
    year: Sequelize.INTEGER
}, {
    sequelize,
    tableName: "run"
});

module.exports = Run;