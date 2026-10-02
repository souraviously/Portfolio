import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { authServices } from "../api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.email.trim()) nextErrors.email = "Email is required";
    if (!form.password) nextErrors.password = "Password is required";
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsLoading(true);
    try {
      await authServices.login(form);
      const profile = await authServices.getProfile();
      if (profile?.data?.role !== "admin") {
        toast.error("Only admin users can access this panel");
        return;
      }
      toast.success("Signed in successfully");
      navigate("/admin", { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 py-10 text-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl"
      >
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Admin</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in</h1>
        </div>

        <div className="space-y-5">
          <label className="block">
            <span className={`mb-2 block text-sm font-semibold ${errors.email ? "text-red-400" : "text-slate-300"}`}>
              Email {errors.email && `- ${errors.email}`}
            </span>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 focus-within:border-red-400">
              <FiMail className="text-slate-500" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="admin@example.com"
              />
            </div>
          </label>

          <label className="block">
            <span className={`mb-2 block text-sm font-semibold ${errors.password ? "text-red-400" : "text-slate-300"}`}>
              Password {errors.password && `- ${errors.password}`}
            </span>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 focus-within:border-red-400">
              <FiLock className="text-slate-500" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Enter password"
              />
            </div>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-600"
        >
          {isLoading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <FiLogIn />
          )}
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
};

export default AdminLogin;
