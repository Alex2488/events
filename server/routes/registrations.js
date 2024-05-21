const express = require('express');
const router = express.Router();
const { Registration } = require('../models');

// Register for an event
router.post('/', async (req, res) => {
    try {
        const newRegistration = await Registration.create(req.body);
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get participants for an event
router.get('/:eventId', async (req, res) => {
    try {
        const registrations = await Registration.findAll({ where: { eventId: req.params.eventId } });
        res.json(registrations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
