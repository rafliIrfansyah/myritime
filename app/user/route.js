const express = require('express');
const { handlerGetUsers, handlerGetUserById, handlerRegisterUser, handlerLoginUser, handlerGetUserLoggedIn } = require('./handler');
const authenticationToken = require('../../middlewares/authenticationToken');
const router = express.Router();

//API Get User/s Data
router.get('/', handlerGetUsers);
router.get('/:id', authenticationToken, handlerGetUserById);

// API Register
router.post('/register', handlerRegisterUser);

// API Login
router.post('/login', handlerLoginUser);

module.exports = router;