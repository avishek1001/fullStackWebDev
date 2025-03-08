const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is shelter root');
})

router.get('/:id', (req, res) => {
    res.send('Showing ID');
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing Shelter');
})

module.exports = router;