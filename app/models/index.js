const Game = require('./game');
const Run = require('./run');
const Event = require('./event');

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

// Un event contient plusieurs jeux
Event.hasMany(Run, {
    foreignKey: "event_id",
    as: "event_runs"
});

// réciproque : une catégorie est liée à un seul event
Run.belongsTo(Event, {
    foreignKey: "event_id",
    as: "event"
});

module.exports = {
    Game,
    Run,
    Event
}