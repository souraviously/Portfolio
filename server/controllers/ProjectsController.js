const projectSchema = require("../models/projectSchema")
const { cloudUpload, cloudDelete } = require("../services/cloudUpload")
const resHandler = require("../utils/resHandler")

// =============== Add Project ==================
const addProject = async (req, res) => {
    try {
        const { title, category, description, liveLink, githubRepo, type, isFeatured, scrollPreview } = req.body
        let technologies = [];
        const thumbnail = req.file
        if (req.body.technologies) technologies = JSON.parse(req.body.technologies);

        // ---------- Validation ----------
        if (!title) return resHandler.error(res, 400, 'Title is required')
        if (!category) return resHandler.error(res, 400, 'Category is required')
        if (technologies.length == 0) return resHandler.error(res, 400, 'At least one tech is needed')

        // ---------- Upload images ----------
        if (!thumbnail) return resHandler.error(res, 400, 'Project thumbnail is required')
        const thumbRes = await cloudUpload({ file: thumbnail, folderPath: "portfolio/project", folder: "project" })

        // ---------- Save to DB ----------
        await projectSchema.create({
            title,
            category,
            description,
            liveLink,
            githubRepo,
            technologies,
            type,
            thumbnail: thumbRes.secure_url,
            isFeatured: isFeatured === true || isFeatured === "true",
            scrollPreview: scrollPreview === true || scrollPreview === "true"
        })

        // ------------ Success 
        resHandler.success(res, 201, "Project created successfully")
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Get all Product ==================
const getAll = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 6;
        const skip = (page - 1) * limit;
        const category = req.query.category;

        // -------- filter
        const filter = {};

        if (category) { filter.category = category; }

        // -------- total count
        const total = await projectSchema.countDocuments();

        // -------- data
        const projects = await projectSchema.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalPages = Math.ceil(total / limit);

        return resHandler.success(res, 200, "Projects fetched", {
            projects,
            pagination: {
                total,
                showing: projects.length,
                page,
                limit,
                totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            },
        });
    } catch (error) {
        return resHandler.error(res, 500, "Internal Server Error");
    }
};

// =============== Get all Product ==================
const getFeatured = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10

        // ---------- Find product 
        const projects = await projectSchema.find({ isFeatured: true }).limit(limit).sort({ createdAt: -1 })
        if (!projects) return resHandler.error(res, 404, "No projects available")

        // ---------- Success 
        resHandler.success(res, 201, "Product fetched", projects)
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}

// =============== Delete Product ==================
const deleteProduct = async (req, res) => {
    try {
        const { projectId } = req.body

        // ---------- Validation ----------
        if (!projectId) return resHandler.error(res, 400, 'Project Id is required')

        // ------- Find from DB
        const existingProduct = await projectSchema.findById(projectId)
        if (!existingProduct) return resHandler.error(res, 404, "Coudn't found any product")


        // ------------ Thumbnail -------------
        cloudDelete({ folder: "project", file: existingProduct.thumbnail }) // --- Delete previous thumbnail

        await projectSchema.findByIdAndDelete(projectId)

        // --------- Success 
        resHandler.success(res, 200, "Project deleted successfully")
    } catch (error) {
        resHandler.error(res, 500, 'Internal Server Error')
    }
}


module.exports = { addProject, getAll, getFeatured, deleteProduct } 
