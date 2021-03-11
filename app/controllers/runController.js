const {
    Game,
    Run
} = require('../models');

const runController = {

    getAllruns: async (req, res) => {

        const runs = await Run.findAll({
            include: 'game'
        });

        const games = await Game.findAll();

        res.send({
            runs,
            games
        })

    }
}

module.exports = runController;