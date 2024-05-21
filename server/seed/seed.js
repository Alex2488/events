const { sequelize, Event } = require('../../node_modules/models');

const events = [
    { title: 'Event 1', description: 'Description 1', date: '2024-06-01', organizer: 'Organizer 1' },
    { title: 'Event 2', description: 'Description 2', date: '2024-06-02', organizer: 'Organizer 2' },
];

sequelize.sync({ force: true }).then(async () => {
    try {
        await Event.bulkCreate(events);
        console.log('Events seeded successfully');
    } catch (err) {
        console.error(err);
    } finally {
        sequelize.close();
    }
});
