const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Registration = sequelize.define('Registration', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    source: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Events',
            key: 'id',
        },
    },
});

module.exports = Registration;
