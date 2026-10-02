const cloudinary = require('cloudinary').v2;

// =================== Upload image 
const cloudUpload = async ({ file, folderPath, folder }) => {
    try {
        const base64String = file.buffer.toString("base64")
        const dataUrl = `data:${file.mimetype};base64,${base64String}`
        return await cloudinary.uploader.upload(dataUrl, { asset_folder: folderPath, folder })
    } catch (error) {
        console.log(error)
    }
}

// =================== Delete image 
const cloudDelete = async ({ folder, file }) => {
    const publicId = file.split("/").pop().split(".").shift()
    await cloudinary.uploader.destroy(`${folder}/${publicId}`)
}

module.exports = { cloudUpload, cloudDelete }