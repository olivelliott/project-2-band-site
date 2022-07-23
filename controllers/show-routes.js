const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote, Show } = require("../models");

// /shows

// GET all shows
router.get('/', (req, res) => {
    Show.findAll({
        attributes: ['id', 'venue', 'show_date']
    })
    .then((dbShowData) => {
        if (!dbShowData) {
            res.status(404).json({ message: 'No upcoming shows!' });
            return;
        }

        const shows = dbShowData.map((show) => show.get({ plain: true }));
        res.render('shows', { shows })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    Show.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'venue', 'show_date']
    })
    .then(dbShowData => {
        if (!dbShowData) {
            res.status(404).json({ message: 'No show found with this id' });
            return;
        }

        const show = dbShowData.get({ plain: true });

        res.render('single-show', { show });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;