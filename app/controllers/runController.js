const {
    Game,
    Run
} = require('../models');

const runController = {

    getAllruns: async (req, res) => {

        const games = await Game.findAll({
            order: ['title']
        });

        const runsNumber = await Run.count();

        const gamesNumber = await Game.count();

        res.render('home', {
            games,
            runsNumber,
            gamesNumber
        });

    },
}

module.exports = runController;