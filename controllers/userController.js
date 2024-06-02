// Register dan Login
const userService = require("../services/userService.js")

const register = async (req, res, next) => {
    try {
        // Menerima email, password, dan role dari req.body
        
        const data = await userService.register(req.body);

        res.status(201).json({message: "User created successfully", data});
    } catch(err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const accessToken = await userService.login(req.body);

        res.status(200).json({
            message: "Login success",
            accessToken
        })
    } catch(err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}