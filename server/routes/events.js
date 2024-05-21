const express = require('express');
const router = express.Router();
const { Event } = require('../../node_modules/models');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Seed events
router.post('/seed', async (req, res) => {
    const events = [
        { title: 'Event 1', description: 'Description 1', date: '2024-06-01', organizer: 'Organizer 1' },
        { title: 'Event 2', description: 'Description 2', date: '2024-06-02', organizer: 'Organizer 2' },
    ];
    try {
        await Event.bulkCreate(events);
        res.status(200).json({ message: 'Events seeded successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/:eventId/participants', async (req, res) => {
    const eventId = req.params.eventId;
    console.log('Fetching participants for eventId:', eventId);  // Debug log
    try {
        const participants = await Registration.findAll({
            where: { eventId },
        });
        console.log('Participants fetched:', participants);  // Debug log
        res.status(200).json(participants);
    } catch (error) {
        console.error('Error fetching participants:', error);
        res.status(500).json({ error: 'Error fetching participants' });
    }
});

module.exports = router;
