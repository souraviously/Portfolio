const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user']
    }

})


module.exports = mongoose.model('user', userSchema)