const router = require('express').Router();

const routes = ['users', 'session'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

// router.use('/users', require('./users'))
router.use('/session', require('./session'))
router.use('/posts', require('./posts'))
router.use('/search', require('./search'));
router.use('/add-remove-friend', require('./addRemoveFriend'));
router.use('/update-user', require('./updateUser'));
router.use('/create-group', require('./group'));


module.exports = router;
