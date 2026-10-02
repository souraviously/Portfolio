const contactSchema = require("../models/contactSchema")
const resHandler = require("../utils/resHandler")

const sendContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body

        if (!name?.trim()) return resHandler.error(res, 400, "Name is required")
        if (!email?.trim()) return resHandler.error(res, 400, "Email is required")
        if (!subject?.trim()) return resHandler.error(res, 400, "Subject is required")
        if (!message?.trim()) return resHandler.error(res, 400, "Message is required")

        const contact = await contactSchema.create({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
        })

        resHandler.success(res, 201, "Message sent successfully", contact)
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}

const getContacts = async (req, res) => {
    try {
        const page = Math.max(1, Number(req.query.page) || 1)
        const limit = Math.max(1, Math.min(50, Number(req.query.limit) || 8))

        const total = await contactSchema.countDocuments()
        const contacts = await contactSchema
            .find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()

        resHandler.success(res, 200, "Contacts fetched successfully", {
            contacts,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            hasMore: page * limit < total,
        })
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params

        const contact = await contactSchema.findByIdAndDelete(id)
        if (!contact) return resHandler.error(res, 404, "Contact not found")

        resHandler.success(res, 200, "Contact deleted successfully")
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}

module.exports = { sendContact, getContacts, deleteContact }