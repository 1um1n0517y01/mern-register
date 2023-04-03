const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

exports.home = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.json(user);
};
