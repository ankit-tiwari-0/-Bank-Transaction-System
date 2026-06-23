const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")


/**
 * - user register controllerr
 * - Post /api/auth/register
 */

async function userRegisterController(req, res) {
    const { email, password, name} = req.body

    const isExists = await userModel.findOne({
        email: email
    })
    if (isExists){
        return res.status(422).json({
            message: "User already exists with email",
            status: "failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({userId:user.id},process.env.JWT,{ expiresIn:"3d"})

    res.cookie("token", token)

    res.status(201).json({
     user:{
        id: user.id,
        email: user.email,
        name: user.name
     },
     token
    })
}


/**
 * - user Login Controller
 * - Post /api/auth
 */

async function userLogin(req, res) {
    const {email, password} = req.body

    const user = await userModel.findOne({email}).select("+password")

    if (!user){
        return res.status(401).json({
            message: "eamil is INVALID"
        })
    }

    const isValidPassword = await user.comparePassword(password)

      
    if (!isValidPassword){
        return res.status(401).json({
            message: "password is INVALID"
        })
    }
     
    const token = jwt.sign({userId:user.id},process.env.JWT,{ expiresIn:"3d"})

    res.cookie("token", token)

    res.status(200).json({
     user:{
        id: user.id,
        email: user.email,
        name: user.name
     },
     token
    })
}
module.exports = {
    userRegisterController,
     userLogin
}