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
    },

    gameById: async (req, res) => {
        try {
            const id = req.params.id;

            const theGame = await Game.findByPk(id);

            const runs = await Run.findAll({
                where: {
                    game_id: id
                },
                include: 'event'
            })

            res.render('game', {
                game: theGame,
                runs
            })

        } catch (error) {
            console.log('error in admin', error);
        }
    },

    getAllGames: async (req, res) => {

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

module.exports = gameController;