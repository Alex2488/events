module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        date: DataTypes.DATE,
        organizer: DataTypes.STRING,
    });
    return Event;
};
