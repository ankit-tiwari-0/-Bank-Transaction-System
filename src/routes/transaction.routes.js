const {Router} = require("express")
const authMiddleware = require('../middleware/auth.middleware')
const transactioncontroller = require('../controllers/transaction.controller')


const transaction = Router()

transactionRouter.post("/", authMiddleware.authMiddleware, transactioncontroller.createTransaction)


module.exports = transactionRouter;