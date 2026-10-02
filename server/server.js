require('dotenv').config({ quiet: true })
const express = require("express")
const cors = require("cors")
const dns = require("dns")
dns.setServers(['8.8.8.8', '8.8.4.4']);
const dbConfig = require("./dbConfig")
const router = require("./routes")
const cookieParser = require('cookie-parser')
const cloudConfig = require('./services/cloudConfig');
const app = express()

// ------------------- Middlewares 
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://souraviously.vercel.app",
    ],
    credentials: true
}))
// ------------------- Route 
app.use(router)
// ------------------- Database 
dbConfig()
cloudConfig()


// ------------------- Server Listener 
if (process.env.NODE_ENV !== "production") {
    app.listen(8000, () => {
        console.log('Server Is Running')
    })
}

module.exports = app