const express = require('express');
const {
  getOverview,
  getTour,
  getLogin,
} = require('../controllers/viewController');
const { isLoggedIn } = require('../controllers/authController');

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

router.get('/login', getLogin);

module.exports = router;
