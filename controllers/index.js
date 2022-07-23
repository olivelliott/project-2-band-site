const router = require("express").Router();

const apiRoutes = require("./api/");
const forumRoutes = require("./forum-routes");
const homeRoutes = require("./home-routes");

router.use('/forum', forumRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;