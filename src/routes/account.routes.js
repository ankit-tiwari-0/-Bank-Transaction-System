const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")


const routes = express.Router()

router.post("/", authMiddleware.authMiddleware)

module.exports = routes