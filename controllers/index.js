const router = require('express').Router();

const apiRoutes = require('./api/');
const forumRoutes = require('./forum-routes');
const homeRoutes = require('./home-routes');
const showRoutes = require('./show-routes');

router.use('/forum', forumRoutes);
router.use('/api', apiRoutes);
router.use('/shows', showRoutes);
router.use('/', homeRoutes);

module.exports = router;
