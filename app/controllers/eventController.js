const {
    Event,
    Game,
    Run
} = require('../models');

const eventController = {

    createEvent: async (req, res) => {
        try {
            const {
                name,
                start_year
            } = req.body;

            // création d'un nouvel event
            const newEvent = await Event.create({
                name,
                start_year
            })

            res.redirect('/admin');

        } catch (error) {
            console.log('error in admin', error);
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const id = req.body.id

            // Suppression d'un event
            const deletedEvent = await Event.destroy({
                where: {
                    id: id
                }

            })

            res.redirect('/admin');

        } catch (error) {
            console.log('error in admin', error);
        }
    },

    eventById: async (req, res) => {
        try {
            const id = req.params.id;

            const theEvent = await Event.findByPk(id);

            const runs = await Run.findAll({
                where: {
                    event_id: id
                },
                include: 'game'
            })

            res.render('event', {
                event: theEvent,
                runs
            })

        } catch (error) {
            console.log('error in admin', error);
        }
    }
}

module.exports = eventController;