import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiImage, FiPlus, FiTrash, FiUpload } from "react-icons/fi";
import { categoryServices, projectServices } from "../api";

const initialForm = {
  title: "",
  category: "",
  description: "",
  liveLink: "",
  githubRepo: "",
  type: "",
  technologyInput: "",
  isFeatured: true,
  scrollPreview: false,
};

const technologyOptions = [
  "nextjs",
  "react",
  "tailwind",
  "javascript",
  "typescript",
  "html",
  "css",
  "redux",
  "zustand",
  "figma",
  "firebase",
  "mongodb",
  "postgresql",
  "bcrypt",
  "authentication",
  "AOS",
  "JWT",
  "cloudinary",
  "socket.io",
  "Axios",
  "nodemailer",
  "stripe",
  "express",
  "nodejs",
  "prisma",
  "mongoose",
  "react-router",
  "vite",
  "sass",
  "bootstrap",
  "framer-motion",
  "gsap",
  "rest api",
  "graphql",
];

const AdminAdd = () => {
  const [form, setForm] = useState(initialForm);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadCategories = async () => {
      try {
        const res = await categoryServices.getCategories();
        if (isMounted) setCategories(res.data || []);
      } catch (error) {
        if (isMounted) {
          setCategories([]);
          toast.error(error.message);
        }
      } finally {
        if (isMounted) setIsCategoriesLoading(false);
      }
    };

    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  const resetForm = () => {
    setForm(initialForm);
    setThumbnail(null);
    setThumbnailPreview("");
    setTechnologies([]);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0] || null;
    setThumbnail(file);
    setThumbnailPreview(file ? URL.createObjectURL(file) : "");
    setErrors((prev) => ({ ...prev, thumbnail: "" }));
  };

  const addTechnology = () => {
    const technology = form.technologyInput.trim();
    if (!technology) return;
    if (technologies.some((item) => item.toLowerCase() === technology.toLowerCase())) {
      setForm((prev) => ({ ...prev, technologyInput: "" }));
      return;
    }

    setTechnologies((prev) => [...prev, technology]);
    setForm((prev) => ({ ...prev, technologyInput: "" }));
    setErrors((prev) => ({ ...prev, technologies: "" }));
  };

  const handleTechKeyDown = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    addTechnology();
  };

  const removeTechnology = (technology) => {
    setTechnologies((prev) => prev.filter((item) => item !== technology));
  };

  const toggleTechnology = (technology) => {
    setTechnologies((prev) => {
      const exists = prev.some((item) => item.toLowerCase() === technology.toLowerCase());
      if (exists) {
        return prev.filter((item) => item.toLowerCase() !== technology.toLowerCase());
      }
      return [...prev, technology];
    });
    setErrors((prev) => ({ ...prev, technologies: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.title.trim()) nextErrors.title = "Project title is required";
    if (!form.category) nextErrors.category = "Please select a category";
    if (!form.description.trim()) nextErrors.description = "Description is required";
    if (!thumbnail) nextErrors.thumbnail = "Thumbnail is required";
    if (technologies.length === 0) nextErrors.technologies = "Add at least one technology";
    return nextErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const payload = new FormData();
    payload.append("title", form.title.trim());
    payload.append("category", form.category);
    payload.append("description", form.description.trim());
    payload.append("liveLink", form.liveLink.trim());
    payload.append("githubRepo", form.githubRepo.trim());
    payload.append("type", form.type.trim());
    payload.append("isFeatured", String(form.isFeatured));
    payload.append("scrollPreview", String(form.scrollPreview));
    payload.append("technologies", JSON.stringify(technologies));
    payload.append("thumbnail", thumbnail);

    setIsCreating(true);
    try {
      await projectServices.addProject(payload);
      toast.success("Project created successfully");
      resetForm();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-7">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">Projects</p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">Add Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-2">
              <label className={`text-sm font-semibold ${errors.title ? "text-red-500" : "text-slate-700"}`}>
                Project Title {errors.title && `- ${errors.title}`}
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleInputChange}
                placeholder="Portfolio website"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-semibold ${errors.description ? "text-red-500" : "text-slate-700"}`}>
                Description {errors.description && `- ${errors.description}`}
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                rows={6}
                placeholder="Write a short project description"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className={`text-sm font-semibold ${errors.category ? "text-red-500" : "text-slate-700"}`}>
                  Category {errors.category && `- ${errors.category}`}
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
                >
                  <option value="">{isCategoriesLoading ? "Loading categories..." : "Choose category"}</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Type</label>
                <input
                  name="type"
                  value={form.type}
                  onChange={handleInputChange}
                  placeholder="React, Next.js, JavaScript"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Live Link</label>
                <input
                  name="liveLink"
                  value={form.liveLink}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Github Repo</label>
                <input
                  name="githubRepo"
                  value={form.githubRepo}
                  onChange={handleInputChange}
                  placeholder="https://github.com/user/repo"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <div className="flex flex-col justify-center gap-2">
                <span className="text-sm font-semibold text-slate-700">Featured</span>
                <label className="inline-flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={form.isFeatured}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-300 text-red-500"
                  />
                  <span className="text-sm text-slate-600">{form.isFeatured ? "Shown in featured projects" : "Hidden from featured projects"}</span>
                </label>
              </div>

              <div className="flex flex-col justify-center gap-2">
                <span className="text-sm font-semibold text-slate-700">Preview</span>
                <label className="inline-flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    name="scrollPreview"
                    checked={form.scrollPreview}
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded border-slate-300 text-red-500"
                  />
                  <span className="text-sm text-slate-600">{form.scrollPreview ? "Shown Scroll preview" : "No scroll preview"}</span>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <FiImage className="text-red-500" /> Thumbnail
                </h2>
                {errors.thumbnail && <span className="text-xs font-bold text-red-500">{errors.thumbnail}</span>}
              </div>

              <div className="relative flex h-64 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
                {thumbnailPreview ? (
                  <>
                    <img src={thumbnailPreview} alt="Project thumbnail preview" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => {
                        setThumbnail(null);
                        setThumbnailPreview("");
                      }}
                      className="absolute right-3 top-3 rounded-lg bg-white p-2 text-red-500 shadow"
                    >
                      <FiTrash />
                    </button>
                  </>
                ) : (
                  <>
                    <FiUpload className="mb-3 text-3xl text-red-500" />
                    <p className="text-sm font-semibold text-slate-600">Upload thumbnail</p>
                  </>
                )}
                <input type="file" className="absolute inset-0 opacity-0" onChange={handleThumbnailChange} accept="image/*" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Technologies</h2>
              {errors.technologies && <p className="mt-1 text-xs font-bold text-red-500">{errors.technologies}</p>}
              <div className="mt-4 flex gap-2">
                <input
                  name="technologyInput"
                  value={form.technologyInput}
                  onChange={handleInputChange}
                  onKeyDown={handleTechKeyDown}
                  placeholder="React"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
                />
                <button type="button" onClick={addTechnology} className="rounded-xl bg-slate-900 px-4 text-white">
                  <FiPlus />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologyOptions.map((technology) => {
                  const active = technologies.some((item) => item.toLowerCase() === technology.toLowerCase());
                  return (
                    <button
                      key={technology}
                      type="button"
                      onClick={() => toggleTechnology(technology)}
                      className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${active
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-red-300 hover:text-red-600"
                        }`}
                    >
                      {technology}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span key={technology} className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                    {technology}
                    <button type="button" onClick={() => removeTechnology(technology)} className="font-bold">
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isCreating}
          className="inline-flex items-center justify-center rounded-xl bg-red-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isCreating ? "Uploading project..." : "Upload Project"}
        </button>
      </form>
    </div>
  );
};

export default AdminAdd;
