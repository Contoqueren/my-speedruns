const {
    Game,
    Run
} = require('../models');

const gameController = {

    createGame: async (req, res) => {
        try {
            const {
                title
            } = req.body;

            // création d'un nouveau jeu
            const newGame = await Game.create({
                title
            })

            res.redirect('/admin');

        } catch (error) {
            console.log('error in admin', error);
        }
    },

    deleteGame: async (req, res) => {
        try {
            const id = req.body.id

            // Suppression d'un jeu
            const deletedGame = await Game.destroy({
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

module.exports = gameController;