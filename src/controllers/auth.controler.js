const userModel = require("../models/user.model")


/**
 * - user register controllerr
 * - Post /api/auth/register
 */

function userRegisterController(req, res) {
    const { email, password, name} = req.body
}

module.exports = {
    userRegisterController
}