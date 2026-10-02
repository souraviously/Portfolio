import React, { useState } from 'react';;
import { NavLink } from 'react-router';
import { FaChartBar, FaUpload } from 'react-icons/fa';
import { FiMenu, FiMessageSquare, FiSettings, FiShield, FiX } from 'react-icons/fi';
import { SiHyperskill } from 'react-icons/si';

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const admin = {
        name: "Admin Panel",
        role: "God Slayer",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rJz6pclOd1NFNQZCX9FnjWJQNt7Ghogtag&s",
    };

    const links = [
        { name: "Add Project", to: "/admin", icon: FaUpload },
        { name: "Categories", to: "/admin/category", icon: FaChartBar },
        { name: "Messages", to: "/admin/messages", icon: FiMessageSquare },
        { name: "Skills", to: "/admin/skills", icon: SiHyperskill },
        { name: "Settings", to: "/admin/settings", icon: FiSettings },
    ];

    return (
        <>
            {/* ── Mobile Top Header Bar ── */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0f172a] border-b border-white/5 flex items-center justify-between px-4 z-45 shadow-md">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors cursor-pointer"
                    >
                        <FiMenu size={22} />
                    </button>
                    <span className="text-white font-extrabold tracking-wider text-xs uppercase">Tenshi Wear Admin</span>
                </div>
            </div>

            {/* ── Sidebar ── */}
            <aside
                className={`fixed top-0 left-0 h-screen w-72 bg-[#0f172a] border-r border-white/5 flex flex-col z-[60] transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Ambient Red Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

                {/* Header / Admin Info */}
                <div className="relative p-6 border-b border-white/5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
                    >
                        <FiX size={20} />
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-red-500/20">
                                <img src={admin.avatar} alt="Admin" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        </div>
                        <div>
                            <h2 className="text-white font-bold tracking-tight">{admin.name}</h2>
                            <div className="flex items-center gap-1 text-[10px] text-red-400 font-bold uppercase tracking-widest">
                                <FiShield size={10} />
                                <span>{admin.role}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
                    <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Main Menu</p>
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${isActive
                                    ? "bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.05)]"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white border border-transparent"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-500 rounded-r-full shadow-[0_0_10px_#ef4444]" />
                                    )}
                                    <link.icon size={18} className={`shrink-0 transition-colors ${isActive ? "text-red-500" : "group-hover:text-white"}`} />
                                    <span className="flex-1">{link.name}</span>
                                    {isActive && <FiShield size={14} className="opacity-50" />}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300"
                />
            )}

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
            `}</style>
        </>
    );
};

export default AdminNavbar;