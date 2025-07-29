const express = require("express")
const { candidateController } = require("../controllers/candidateController")
const router = express.Router()

router.post("/new-candidate", candidateController)

module.exports = router