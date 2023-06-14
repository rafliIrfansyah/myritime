const express = require('express');
const { handlerGetFishPrice, handlerGetAllFishPrice, handlerGetFilteredFishPrice } = require('./handler');
const authenticationToken = require('../../middlewares/authenticationToken');
const router = express.Router();

router.post('/fish', authenticationToken, handlerGetAllFishPrice);

module.exports = router;
