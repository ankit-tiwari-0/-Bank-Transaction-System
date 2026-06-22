const express = require("express")
const auth = require("../controllers/auth.controler")

const router = express.Router()

router.post("/register", auth.userRegisterController)

module.exports = router