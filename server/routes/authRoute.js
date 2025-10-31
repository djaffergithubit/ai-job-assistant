const express = require("express")
const { registerController, loginController, forgetPasswordController, modifyPasswordController, logoutController } = require("../controllers/authController")
const router = express.Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/forgot-password", forgetPasswordController)
router.post("/modify-password", modifyPasswordController)

module.exports = router