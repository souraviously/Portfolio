import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
    withCredentials: true,
});

const getErrorMessage = (error) => {
    return error?.response?.data?.message || error?.message || "Something went wrong";
};

api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(new Error(getErrorMessage(error)))
);

// ========================== APi Calls ================================
const authServices = {
    login: async (loginData) => {
        const res = await api.post("/auth/signin", loginData);
        return res.data;
    },
    getProfile: async () => {
        const res = await api.get("/auth/profile");
        return res.data;
    },
};

const projectServices = {
    addProject: async (data) => {
        const res = await api.post("/projects/add", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res.data;
    },
};

const categoryServices = {
    createCategory: async (data) => {
        const res = await api.post("/category/create", data);
        return res.data;
    },
    getCategories: async () => {
        const res = await api.get("/category/all");
        return res.data;
    },
};

const contactServices = {
    sendContact: async (data) => {
        const res = await api.post("/contact/send", data);
        return res.data;
    },
    getContacts: async ({ page = 1, limit = 8 } = {}) => {
        const res = await api.get(`/contact/all?page=${page}&limit=${limit}`);
        return res.data;
    },
    deleteContact: async (id) => {
        const res = await api.delete(`/contact/delete/${id}`);
        return res.data;
    },
};

export { api, authServices, projectServices, categoryServices, contactServices };
