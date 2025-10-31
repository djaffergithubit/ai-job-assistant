const express = require("express")
const { getUsersController, getCurrentUserController } = require("../controllers/usersController")
const isAuth = require("../middlewares/isAuth")
const router = express.Router()

router.get('/', isAuth, getUsersController)
router.get('/current-user', isAuth, getCurrentUserController)

module.exports = router