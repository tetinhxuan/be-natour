const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistance,
  uploadTourImages,
  resizeTourImages,
} = require('../controllers/tourController');
const authCOntroller = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authCOntroller.protect,
    authCOntroller.restrictTo('admin', 'lead-guide', 'guide'),
    getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);

router.route('/distance/:latlng/unit/:unit').get(getDistance);

router
  .route('/')
  .get(getAllTours)
  .post(
    authCOntroller.protect,
    authCOntroller.restrictTo('admin', 'lead-guide'),
    createTour,
  );
router
  .route('/:id')
  .get(getTour)
  .patch(
    authCOntroller.protect,
    authCOntroller.restrictTo('admin', 'lead-guide'),
    uploadTourImages,
    resizeTourImages,
    updateTour,
  )
  .delete(
    authCOntroller.protect,
    authCOntroller.restrictTo('admin', 'lead-guide'),
    deleteTour,
  );

module.exports = router;
