const express = require('express')
const router = express.Router()
const {applyController}= require("../controller/applycontroller")


router.post("/course", applyController) 

module.exports = router
