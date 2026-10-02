import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { authServices } from "../api";
import AdminNavbar from "../components/navbar/AdminNavbar";

const AdminLayout = () => {
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const loadProfile = async () => {
            try {
                const res = await authServices.getProfile();
                if (isMounted) setProfile(res.data);
            } catch (error) {
                if (isMounted) setIsError(true);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadProfile();

        return () => {
            isMounted = false;
        };
    }, []);

    if (isLoading) {
        return (
            <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-red-500" />
            </div>
        );
    }

    if (isError || profile?.role !== "admin") return <Navigate to="/admin/login" replace />;

    return (
        <>
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <AdminNavbar />

                {/* Main content */}
                <main className="flex-1 min-h-screen rounded-l-3xl shadow-inner md:ml-72 relative pt-16 md:pt-0">
                    <Outlet />
                </main>

            </div>
        </>
    );
};

export default AdminLayout;
