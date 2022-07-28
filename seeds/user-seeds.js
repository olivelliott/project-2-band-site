const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [{
        username: "user1",
        email: "user1@gmail.com",
        password: "password",
        instagram: "",
        facebook: "",
    },
    {
        username: "user2",
        email: "user2@gmail.com",
        password: "password",
        instagram: "",
        facebook: "",
    },
    {
        username: "user3",
        email: "user3@gmail.com",
        password: "password",
        instagram: "",
        facebook: "",
    },
    {
        username: "user4",
        email: "user4@gmail.com",
        password: "password",
        instagram: "",
        facebook: "",
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;