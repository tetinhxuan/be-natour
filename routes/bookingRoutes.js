const express = require('express');

const { restrictTo, protect } = require('../controllers/authController');
const {
  getCheckoutSession,
  deleteBooking,
  updateBooking,
  getAllBookings,
  createBooking,
  getBooking,
} = require('../controllers/bookingController');

const router = express.Router();

router.use(protect);

router.get('/checkout-session/:tourId', getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));

router.route('/').get(getAllBookings).post(createBooking);

router.route('/:id').get(getBooking).delete(deleteBooking).patch(updateBooking);

module.exports = router;
