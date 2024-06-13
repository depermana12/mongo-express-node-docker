import Tour from "../models/tourModel.js";
import ApiFeatures from "../utils/ApiFeatures.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const aliasTopTours = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};

// @desc    Fetch all tours
// @route   GET /api/v1/tours
// @access  Public
export const getAllTours = asyncHandler(async (req, res, next) => {
  const features = new ApiFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const tours = await features.query;

  res.status(200).json({
    success: true,
    results: tours.length,
    data: {
      tours,
    },
  });
});

// @desc    Fetch tour by id
// @route   GET /api/v1/tours/:id
// @access  Public
export const getTour = asyncHandler(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: {
      tour,
    },
  });
});

// @desc    Create tour
// @route   POST /api/v1/tours
// @access  Private
export const createTour = asyncHandler(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    success: true,
    data: {
      tour: newTour,
    },
  });
});

// @desc    Update tour
// @route   PATCH /api/v1/tours/:id
// @access  Private
export const updateTour = asyncHandler(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: {
      tour,
    },
  });
});

// @desc    Delete tour
// @route   DELETE /api/v1/tours/:id
// @access  Private
export const deleteTour = asyncHandler(async (req, res, next) => {
  await Tour.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
