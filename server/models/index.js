const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('events_g', 'postgres', '4679', {
    host: 'localhost',
    dialect: 'postgres',
});

const Event = require('models/event')(sequelize, Sequelize);
const Registration = require('models/registration')(sequelize, Sequelize);

sequelize.sync();

module.exports = {
    sequelize,
    Event,
    Registration,
};
