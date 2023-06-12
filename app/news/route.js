const express = require('express');
const { handlerGetAllNews } = require('./handler');
const authenticationToken = require('../../middlewares/authenticationToken');
const router = express.Router();

router.post('/', authenticationToken, handlerGetAllNews);

module.exports = router;
