const userSchema = require("../models/userSchema")
const { generateAccToken } = require("../services/tokens")
const resHandler = require("../utils/resHandler")

// ========================== Sign Up ===========================
const signUp = async (req, res) => {
    try {
        const { email, password } = req.body

        // ---------- Existing User 
        if (!email) return res.status(400).send({ message: 'Email is required!' })
        if (!password) return res.status(400).send({ message: 'Password is required!' })

        // ----------- Sent to DB 
        await userSchema.create({
            email,
            password,
        })

        // ------------------ Success 
        res.status(201).send({ message: 'Registration Successful' })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}

// ========================== Sign In =============================
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) return res.status(400).send({ message: 'Email is required!' })
        if (!password) return res.status(400).send({ message: 'Password is required!' })

        // ---------- Existing User 
        const existingUser = await userSchema.findOne({ email })
        if (!existingUser) return res.status(404).send({ message: `User with this email doesn't exists. Please signUp!` })

        // --------- Compare password 
        if (existingUser.password != password) return res.status(400).send({ message: 'Wrong credentails' })

        // ------------- JWT token and cookie
        const accToken = generateAccToken(existingUser)
        res.cookie("X-AS-TOKEN", accToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 120 * 24 * 60 * 60 * 1000
        })

        // ------------ Success 
        res.status(200).send({
            message: "Login Successfully completed!",
            data: {
                _id: existingUser._id,
                email: existingUser.email,
                role: existingUser.role,
            }
        })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
}

// ========================== Profile =============================
const getProfile = async (req, res) => {
    try {
        if (!req.user?._id) return resHandler.error(res, 401, "Unauthorized")

        const user = await userSchema.findById(req.user._id).select("_id email role")
        if (!user) return resHandler.error(res, 404, "User not found")

        resHandler.success(res, 200, "Profile fetched successfully", user)
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}


module.exports = { signUp, signIn, getProfile }
