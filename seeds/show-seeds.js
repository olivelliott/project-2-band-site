const { show, Post } = require('../models')

const showData = [
    {
        Venue: ' The Cotton Room ',
        location: ' Durham, NC ',
        show_date: '2022-09-20',
        show_link: 'https://tchospitalitygroup.com/our-companies/the-cotton-room/',
    },
    {
        Venue: ' Pine and Poplar ',
        location: ' Durham ',
        show_date: '2022-12-31',
        show_link: 'https://pineandpoplardurham.com/',
    },
    {
        Venue: ' Boiler Room ',
        location: ' Durham ',
        show_date: '2022-8-9',
        show_link: 'https://documentarystudies.duke.edu/events/the-power-plant-at-american-tobacco-campus/boiler-room',
    },
    {
        Venue: 'Motorco Music Hall',
        location: ' Durham ',
        show_date: '2022-09-25',
        show_link: 'https://motorcomusic.com/',
    },
    {
        Venue: 'The Stockroom at 230',
        location: ' Raleigh ',
        show_date: '2022-10-20',
        show_link: 'https://www.thestockroomat230.com/',
    },
    {
        Venue: 'The Pavilion',
        location: ' Raleigh ',
        show_date: '2022-11-10',
        show_link: 'https://www.angusbarn.com//pavilion.html',
    },
    {
        Venue: 'Ransom Pub & Event Venue',
        location: ' Boone ',
        show_date: '2022-12-14',
        show_link: 'https://www.ransomboone.com/',
    },
]

const seedShow = () => Post.bulkCreate(showData)

module.exports = seedShow