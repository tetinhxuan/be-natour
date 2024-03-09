const express = require('express');

const { restrictTo, protect } = require('../controllers/authController');
const { getCheckoutSession } = require('../controllers/bookingController');

const router = express.Router();

router.get('/checkout-session/:tourId', protect, getCheckoutSession);

module.exports = router;
