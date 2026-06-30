const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const AccountController = require("../controllers/account.controller")


const router = express.Router()

router.post("/", authMiddleware.authMiddleware, AccountController.createAccountController)


/**
 * - GET /api/accounts/
 * - Get all accounts of the logged-in user
 * - Protected Route
 */
router.get("/", authMiddleware.authMiddleware, AccountController.getUserAccountsController)


/**
 * - GET /api/accounts/balance/:accountId
 */
router.get("/balance/:accountId", authMiddleware.authMiddleware, AccountController.getAccountBalanceController)



module.exports = router