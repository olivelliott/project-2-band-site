const { Post, Show } = require('../models')

const showData = [
  {
    venue: " The Cotton Room ",
    location: " Durham, NC ",
    show_date: "2022-09-20",
    show_link: "www.tchospitalitygroup.com/our-companies/the-cotton-room/",
  },
  {
    venue: " Pine and Poplar ",
    location: " Durham, NC ",
    show_date: "2022-12-31",
    show_link: "www.pineandpoplardurham.com/",
  },
  {
    venue: " Boiler Room ",
    location: " Durham, NC ",
    show_date: "2022-8-9",
    show_link:
      "www.documentarystudies.duke.edu/events/the-power-plant-at-american-tobacco-campus/boiler-room",
  },
  {
    venue: "Motorco Music Hall",
    location: " Durham, NC ",
    show_date: "2022-09-25",
    show_link: "www.motorcomusic.com/",
  },
  {
    venue: "The Orange Peel",
    location: " Asheville, NC ",
    show_date: "2022-10-20",
    show_link: "www.theorangepeel.net/",
  },
  {
    venue: "The Pavilion",
    location: " Raleigh, NC ",
    show_date: "2022-11-10",
    show_link: "www.angusbarn.com//pavilion.html",
  },
  {
    venue: "Ransom Pub & Event venue",
    location: " Boone, NC ",
    show_date: "2022-12-14",
    show_link: "www.ransomboone.com/",
  },
];

const seedShow = () => Show.bulkCreate(showData)

module.exports = seedShow