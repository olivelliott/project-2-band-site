const router = require("express").Router();
const { User, Post, Comment, Show } = require("../../models");

// * api/shows

// GET all shows
router.get('/', (req, res) => {
    Show.findAll({
        attributes: ['id', 'venue', 'show_date']
    })
    .then(dbShowData => res.json(dbShowData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// GET one show by its id
router.get('/:id', (req, res) => {
    Show.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'venue', 'show_date']
    })
    .then(dbShowData => {
        if (!dbShowData) {
            res.status(404).json({ message: 'No show found' });
            return;
        }
        res.json(dbShowData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// CREATE a show
router.post('/', (req, res) => {
    Show.create({
        venue: req.body.venue,
        show_date: req.body.show_date
        // show_date expects: '2022-01-17'
    })
    .then(dbShowData => res.json(dbShowData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// UPDATE a show by its id
router.put('/:id', (req, res) => {
    Show.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbShowData => {
        if (!dbShowData) {
            res.status(404).json({ message: 'No show found with this id' });
            return;
        }
        res.json(dbShowData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE a show by its id
router.delete('/:id', (req, res) => {
    Show.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbShowData => {
        if (!dbShowData) {
            res.status(404).json({ message: 'No show found with this id' });
            return;
        }
        res.json(dbShowData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router