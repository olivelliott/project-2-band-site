const seedComment = require("./comment-seeds");
const seedPost = require("./post-seeds");
const seedUser = require("./user-seeds");
const seedLike = require("./vote-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("n----- DATABASE SYNCED -----\n");

  await seedComment();
  console.log("\n----- COMMENT SEEDED -----\n");

  await seedPost();
  console.log("\n----- POST SEEDED -----\n");

  await seedUser();
  console.log("\n----- USER SEEDED -----\n");

  await seedLike();
  console.log("\n----- LIKE SEEDED -----\n");

  process.exit(0);
};

seedAll();
