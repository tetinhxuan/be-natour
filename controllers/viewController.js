const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  // get tour data from collection
  const tours = await Tour.find();
  // build template
  // render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tour',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  res
    .status(200)
    .set(
      'Content-Security-Policy',
      'connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com',
    )
    .render('tour', {
      title: tour.name,
      tour,
    });
});
