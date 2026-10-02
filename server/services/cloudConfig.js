const cloudinary = require('cloudinary').v2;

const cloudConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SEC
    });
}


module.exports = cloudConfig