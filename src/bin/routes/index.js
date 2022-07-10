const express = require("express");
const router = express.Router();
const apiRouter = express.Router();
const { connect } = require("../utils/mongo");

const bookDelivery = require("../../modules/book/delivery");

router.use("/", apiRouter);
bookDelivery.init(apiRouter);

connect();
module.exports = router;
