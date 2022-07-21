const router = require("express").Router();

const apiRoutes = require("./api/");
const forumRoutes = require("./forum-routes");

router.use('/forum', forumRoutes);
router.use('/api', apiRoutes);

module.exports = router;