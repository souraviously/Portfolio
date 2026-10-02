const resHandler = require("../utils/resHandler")

const roleCheckMiddleware = (...roles) => {
    return (req, res, next) => {
        try {
            if(roles.includes(req.user.role)) return next()
            resHandler.error(res, 403, "Forbidden")
        } catch (error) {
            resHandler.error(res, 500, "Internal server error")
        }
    }
}

module.exports = roleCheckMiddleware