const {hashPassword, comparePassword} = require("../lib/bcrypt.js")
const userRepository = require("../repositories/userRepository.js")
const {generateToken} = require("../lib/jwt.js")

const register = async (params) => {

    const {email, password} = params;

    const encryptedPass = hashPassword(password);

    const registerParams = {
        email,
        password: encryptedPass,
    }

    const data = await userRepository.register(registerParams)

    return data;
}

const login = async (params) => {

    const {email, password} = params;


    const loginParams = {
        email,
        password
    }

    const foundUser = await userRepository.login(loginParams);

    // Berhasil Login
    if(comparePassword(password, foundUser.password)) {
        
        // Generate AccessToken 

        const accessToken = generateToken({
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
        })

        return accessToken;
    } else {
        // Gagal Login
        throw {name: "InvalidCredentials"}
    }

}

module.exports = {
    register,
    login
}