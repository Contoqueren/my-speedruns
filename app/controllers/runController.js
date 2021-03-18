const {
    Game,
    Run,
    Event
} = require('../models');

const runController = {

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
            const newRun = await Run.create({
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
    },

    runsByYear: async (req, res) => {
        try {
            const year = req.params.id;

            const runs = await Run.findAll({
                where: {
                    year
                },
                include: ['game']
            });

            const events = await Event.findAll({
                where: {
                    start_year: year
                }
            })

            res.render('run', {
                runs,
                events
            })

        } catch (error) {
            console.log('error in admin', error);
        }
    },
}

module.exports = runController;