const express = require("express")
const cookie = require("cookie-parser")


const app = express()

app.use(express.json())
app.use(cookie())

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRouters = require("./routes/transaction.routes")

/**
 * - use
 */
app.use("/api/auth", authRouter)
app.use("/api/account", accountRouter)
app.use("/api/transaction", transactionRouters)


module.exports = app