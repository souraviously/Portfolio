const categorySchema = require("../models/categorySchema")
const resHandler = require("../utils/resHandler")

// ================= Create Category =====================
const createCategory = async (req, res) => {
    try {
        const { slug, name } = req.body

        // ---------- Validations 
        if (!slug) return resHandler.error(res, 400, "Category slug is required")
        if (!name) return resHandler.error(res, 400, "Category name is required")

        const existingCategory = await categorySchema.findOne({ slug })
        if (existingCategory) return resHandler.error(res, 409, "Category already exists")

        // ----------- Send to DB 
        await categorySchema.create({
            slug,
            name,
        })

        // --------------- Success
        resHandler.success(res, 201, "Category created successfully")
    } catch (error) {
        resHandler.error(res, 500, "Internal server error")
    }
}

// ================= Update Category =====================
const updateCategory = async (req, res) => {
    try {
        const slug = req.query.slug
        const { name } = req.body

        // ------- Find from DB
        const existingCategory = await categorySchema.findOne({ slug })
        if (!existingCategory) return resHandler.error(res, 404, "Couldn't found any category")

        // ------- Changes
        if (name) existingCategory.name = name

        // ---- Save
        await existingCategory.save()

        // --------- Success 
        resHandler.success(res, 200, "Category updated successfully")
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// ================= Get All Category =====================
const getCategories = async (req, res) => {
    try {
        const categories = await categorySchema.aggregate([{
            $lookup: {
                from: "projects",
                localField: "_id",
                foreignField: "category",
                as: "projects"
            }
        },
        { $set: { totalProjects: { $size: "$projects" } } },
        { $project: { projects: 0, __v: 0 } }
        ]);

        resHandler.success(res, 200, "Category fetched successfully", categories);
    } catch (error) {
        resHandler.error(res, 500, "Internal server error");
    }
};

module.exports = { createCategory, updateCategory, getCategories }
