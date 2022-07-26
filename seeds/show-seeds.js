const { show, Post } = require('../models')

const showData = [
    {
        Venue: '',
        location: '',
        show_date: '',
        show_link: '',
    },
]

const seedShow = () => Post.bulkCreate(showData)

module.exports = seedShow