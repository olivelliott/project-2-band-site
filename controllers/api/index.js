const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const showRoutes = require("./show-routes");
const newsletterRoutes = require("./newsletter-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/shows", showRoutes);
router.use('/newsletter', newsletterRoutes);


module.exports = router;
