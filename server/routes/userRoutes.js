const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/logout', authController.logout);
// router.post('/login', authController.login);

router.route('/home').get(authController.protect, userController.home);

module.exports = router;
