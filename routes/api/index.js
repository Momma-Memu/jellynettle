const router = require('express').Router();

const routes = ['users', 'session'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

// router.use('/users', require('./users'))
router.use('/session', require('./session'))
router.use('/posts', require('./posts'))
router.use('/search', require('./search'));


module.exports = router;
