const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [

  {
    username: "bowen1",
    email: "bowen@ncc1.gov",
    password: "bowen1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "bruno2",
    email: "brunoncc3.edu",
    password: "bruno1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "bryant3",
    email: "bryant@nchcon.com",
    password: "bryant1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "charles4",
    email: "charles@ncc1.edu",
    password: "charles1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "cooper5",
    email: "cooper@ncc1.com",
    password: "cooper1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "cunningham6",
    email: "cunninghamn@ncc1.com",
    password: "cunningham1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "dzikiti7",
    email: "dzikiti@nchcon.edu",
    password: "dzikiti1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "gethers8",
    email: "gethers@nchcon.com",
    password: "gethers1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "hawkins9",
    email: "hawkins@ncmaster.edu",
    password: "hawkins1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "miller10",
    email: "miller@ncc1.gov",
    password: "miller1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "morgan11",
    email: "morgan@ncc1.com",
    password: "morgan1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "shanchez12",
    email: "shanchez@ncc2.com",
    password: "shanchez1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "strud13",
    email: "strud@ncmaster.gov",
    password: "strud1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
  {
    username: "wilson14",
    email: "wilson@nchcon.gov",
    password: "wilson1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },  
  {
    username: "locke",
    email: "lockec1@nc.com",
    password: "locke1234",
    instagram: 'https://instagram.com', 
    facebook: 'https://www.facebook.com'
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
