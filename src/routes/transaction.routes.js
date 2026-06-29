const {Router} = require("express")
const authMiddleware = require('../middleware/auth.middleware')


const transaction = Router()

transactionRouter.post("/", authMiddleware.authMiddleware)


module.exports = transactionRouter;