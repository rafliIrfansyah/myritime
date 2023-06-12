const express = require('express');
const { handlerGetFishPrice } = require('./handler');
const authenticationToken = require('../../middlewares/authenticationToken');
const router = express.Router();

router.post('/fish', authenticationToken, handlerGetFishPrice);

module.exports = router;
