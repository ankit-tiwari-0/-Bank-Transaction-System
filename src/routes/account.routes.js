const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const AccountController = require("../controllers/account.controller")


const router = express.Router()

router.post("/", authMiddleware.authMiddleware, AccountController.createAccountController)

module.exports = router