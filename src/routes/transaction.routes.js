const {Router} = require("express")
const authMiddleware = require('../middleware/auth.middleware')
const transactioncontroller = require('../controllers/transaction.controller')


const transaction = Router()

transactionRouter.post("/", authMiddleware.authMiddleware, transactioncontroller.createTransaction)


transactionRouter.post("/system", authMiddleware.authSystemUserMiddleware,transactioncontroller.createInitialFundsTransaction )

module.exports = transactionRouter;