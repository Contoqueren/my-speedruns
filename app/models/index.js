const Game = require('./game');
const Run = require('./run');

// Un jeu correspond à plusieurs catégories
Game.hasMany(Run, {
    foreignKey: "game_id",
    as: "runs"
});

// réciproque : une catégorie est liée à un seul jeu
Run.belongsTo(Game, {
    foreignKey: "game_id",
    as: "game"
});

module.exports = {
    Game,
    Run
}