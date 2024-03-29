const express = require('express');
const {
  getOverview,
  getTour,
  getLogin,
  getAccount,
  updateUserData,
  getMyTous,
} = require('../controllers/viewController');
const { isLoggedIn, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);

router.get('/tour/:slug', isLoggedIn, getTour);

router.get('/login', isLoggedIn, getLogin);

router.get('/me', protect, getAccount);

router.get('/my-tours', protect, getMyTous);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
