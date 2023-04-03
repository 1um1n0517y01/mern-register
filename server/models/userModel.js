const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please tell us your first name.'],
    trim: true,
    maxLength: [40, 'A user name can not have more than 40 characters'],
    minLength: [2, 'A user name can not have less than 2 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us your last name.'],
    trim: true,
    maxLength: [40, 'A user name can not have more than 40 characters'],
    minLength: [2, 'A user name can not have less than 2 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide email in valid format.'],
    trim: true,
    maxLength: [40, 'Email can not have more than 40 characters'],
    minLength: [8, 'Email name can not have less than 8 characters'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minLength: [6, 'A user password can not have less than 6 characters'],
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
