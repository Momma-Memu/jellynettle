const router = require('express').Router();

const routes = ['users', 'session'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

// router.use('/users', require('./users'))
router.use('/session', require('./session'))


module.exports = router;
