const {User} = require("../models")

const register = async (params) => {

    const data = await User.create(params, {returning: true})

    return data;
}

const login = async (params) => {
    
    const {email, password} = params;

    const foundUser = await User.findOne({
        where: {
            email
        }
    })

    if(!foundUser) {
        throw {name: "InvalidCredentials"}
    }

    return foundUser;
}

module.exports = {
    register,
    login
}