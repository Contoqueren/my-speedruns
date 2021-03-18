const {
    Run,
    Game,
    Event
} = require('../models');

const userController = {

    loginForm: (req, res) => {
        res.render('login');
    },

    handleLoginForm: (req, res) => {

        try {
            const {
                pseudo,
                password
            } = req.body

            if (pseudo !== "Contos") {
                return res.render('login', {
                    error: 'Pseudo ou mot de passe incorrect'
                })
            }

            if (password !== 'KjfY5h2J448Bzw') {
                return res.render('login', {
                    error: 'Pseudo ou mot de passe incorrect'
                })
            }

            req.app.locals.user = true;

            req.session.user = true;

            res.redirect('/admin');

        } catch (error) {
            console.log(error);
        }
    },

    adminPage: async (req, res) => {
        const runs = await Run.findAll({
            include: ['game', 'event']
        });

        const games = await Game.findAll();

        const events = await Event.findAll();

        res.render('admin', {
            runs,
            games,
            events
        });
    },
}

module.exports = userController;