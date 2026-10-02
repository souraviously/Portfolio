import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FiFolderPlus, FiRefreshCw } from "react-icons/fi";
import { categoryServices } from "../api";

const AdminCategory = () => {
  const [form, setForm] = useState({ name: "", slug: "" });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [isSlugEdited, setIsSlugEdited] = useState(false);

  const generatedSlug = useMemo(() => {
    return form.name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, [form.name]);

  useEffect(() => {
    if (!isSlugEdited) {
      setForm((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [generatedSlug, isSlugEdited]);

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const res = await categoryServices.getCategories();
      setCategories(res.data || []);
    } catch (error) {
      setCategories([]);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "slug") setIsSlugEdited(true);
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Category name is required";
    if (!form.slug.trim()) nextErrors.slug = "Category slug is required";
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsCreating(true);
    try {
      await categoryServices.createCategory({
        name: form.name.trim(),
        slug: form.slug.trim().toLowerCase(),
      });
      toast.success("Category created successfully");
      setForm({ name: "", slug: "" });
      setIsSlugEdited(false);
      await loadCategories();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">Categories</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Admin Category</h1>
        </div>
        <button
          type="button"
          onClick={loadCategories}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 disabled:opacity-60"
        >
          <FiRefreshCw className={isLoading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900">
            <FiFolderPlus className="text-red-500" /> Add Category
          </h2>

          <div className="space-y-5">
            <label className="block">
              <span className={`mb-2 block text-sm font-semibold ${errors.name ? "text-red-500" : "text-slate-700"}`}>
                Name {errors.name && `- ${errors.name}`}
              </span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="React Projects"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
              />
            </label>

            <label className="block">
              <span className={`mb-2 block text-sm font-semibold ${errors.slug ? "text-red-500" : "text-slate-700"}`}>
                Slug {errors.slug && `- ${errors.slug}`}
              </span>
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="react-projects"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-red-500"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isCreating}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isCreating ? "Creating category..." : "Create Category"}
          </button>
        </form>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-5 text-lg font-bold text-slate-900">All Categories</h2>

          {isLoading ? (
            <div className="grid min-h-48 place-items-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-red-500" />
            </div>
          ) : categories.length ? (
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Slug</th>
                    <th className="px-4 py-3 font-semibold">Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {categories.map((category) => (
                    <tr key={category._id}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{category.name}</td>
                      <td className="px-4 py-3 text-slate-600">{category.slug}</td>
                      <td className="px-4 py-3 text-slate-600">{category.totalProjects || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No categories found.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminCategory;
