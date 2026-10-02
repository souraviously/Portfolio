const { verifyToken } = require("../services/tokens")

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies?.["X-AS-TOKEN"]

        // ---- Validation ----
        if (!token) return res.status(401).json({ message: "No token provided" })

        // ---- Verify the access token ----
        const decoded = verifyToken(token)

        if (!decoded) return res.status(403).json({ message: "Invalid or expired token" })

        // ---- Set the info user ----
        req.user = decoded
        next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}


module.exports = authMiddleware