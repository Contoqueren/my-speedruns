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
    }
}

module.exports = eventController;