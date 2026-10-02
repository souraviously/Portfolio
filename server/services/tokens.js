const jwt = require("jsonwebtoken")


const generateAccToken = (data) => {
    try {
        const token = jwt.sign({
            _id: data._id,
            email: data.email,
            role: data.role

        }, process.env.JWT_SEC, { expiresIn: '120d' });
        return token

    } catch (error) {
        return null
    }
}

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        return decoded

    } catch (error) {
        return null
    }
}



module.exports = { generateAccToken, verifyToken }