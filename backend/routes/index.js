const express = require('express')
const router = express.Router();
const dataRouter = require("./dataRoute")


router.use("/data", dataRouter)

module.exports= router;