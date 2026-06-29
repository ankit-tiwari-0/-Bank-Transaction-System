const mongoose = require("mongoose")


const transationSchema = new mongoose.Schema({

    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a from account"],
        index: true
    },

    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Transaction must be associated with a to account"],
        index: true
    },
    status:{
        type: String,
        enum:{
            value: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
            message: "Status can be either PENDING, COMPLETED, FAILED OR REVERSED",
        },
        default: "PENDING"
    },
    amount: {
        type: Number,
        required: [true, "Amount is required for creating a transaction"],
        min:[0, "Transaction amount cannot be negativeqwq"]
    },
    idempoteacyKey: {
        type: String,
        required: [true],
        index: true,
        unique: true
    }

}, {
    timestamps: true
})

const transactionModel = mongoose.model("transaction", transationSchema)

module.exports = transactionModel