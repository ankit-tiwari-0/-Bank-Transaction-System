const {Router} = require("express")
const authMiddleware = require('../middleware/auth.middleware')
const transactioncontroller = require('../controllers/transaction.controller')


const transaction = Router()

transaction.post("/", authMiddleware.authMiddleware, transactioncontroller.createTransaction)


transaction.post("/system", authMiddleware.authSystemUserMiddleware,transactioncontroller.createInitialFundsTransaction )

module.exports = transaction;