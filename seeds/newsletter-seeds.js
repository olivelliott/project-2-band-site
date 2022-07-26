const { Newsletter, Post } = require('../models')

const newsletterData = [
    {
        email: ''
    },
]

const seedNews = () => Post.bulkCreate(newsletterData)

module.exports = seedNews