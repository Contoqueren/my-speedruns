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

    createRun: async (req, res) => {
        try {
            const {
                category,
                video,
                year,
                time,
                game_id,
                event_id
            } = req.body;

            // création d'une nouvelle run
            const newRun = await Race.create({
                category,
                video,
                year,
                time,
                game_id,
                event_id
            })

            res.redirect('/admin');

        } catch (error) {
            console.log('error in admin', error);
        }
    },

    deleteRun: async (req, res) => {
        try {
            const id = req.body.id

            // Suppression d'une run
            const deletedRun = await Run.destroy({
                where: {
                    id: id
                }

            })

            res.redirect('/admin');

        } catch (error) {
            console.log('error in admin', error);
        }
    }
}

module.exports = runController;