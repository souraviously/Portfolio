import React, { useEffect, useMemo, useState } from 'react'
import { FiAlertCircle, FiGrid, FiLayers } from 'react-icons/fi'
import { api, categoryServices } from '../../api'
import ProjectCard from './ProjectCard'

const AllProjects = () => {
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])
    const [pagination, setPagination] = useState([])
    const [selected, setSelected] = useState('6a2823ca63bc33c979653720')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let active = true

        const fetchProjects = async () => {
            try {
                setLoading(true)
                setError('')

                const [categoryRes, projectRes] = await Promise.all([
                    categoryServices.getCategories(),
                    api.get(`/projects`, {
                        params: {
                            limit: 1000,
                            category: selected,
                        },
                    }),
                ])
                const categoryData = categoryRes?.data || categoryRes || []
                const projectData = projectRes?.data?.data?.projects || []
                const paginationData = projectRes?.data?.data?.pagination || []

                if (!active) return

                setCategories(categoryData)
                setProjects(projectData)
                setPagination(paginationData)
            } catch (err) {
                if (!active) return
                setError(err.message || 'Failed to load projects')
            } finally {
                if (active) setLoading(false)
            }
        }

        fetchProjects()

        return () => {
            active = false
        }
    }, [selected])

    const totalProjects = projects.length
    const categoryButtons = useMemo(() => {
        return categories.map((category) => ({
            id: String(category._id),
            label: category.name,
            count: category.totalProjects || 0,
            icon: <FiLayers aria-hidden="true" />,
        })).reverse()
    }, [categories, totalProjects])


    return (
        <section id='AllProjects-Section' className='mb-20 overflow-hidden'>
            <div id="Projects-Header-Row" className="max-w-7xl w-full mx-auto rounded-3xl border-0 md:border border-Primary/10 bg-transparent md:bg-[#f2f0e9]/70 p-0 md:p-8 md:shadow-[0_24px_70px_rgba(22,22,22,0.08)]">
                <div className="md:p-0 p-4 flex flex-col justify-between gap-6 md:gap-8 lg:flex-row lg:items-end">
                    <div>
                        <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-coffee/25 bg-coffee/10 px-3.5 py-1.5 md:px-4 md:py-2 font-poppins text-[11px] md:text-xs font-bold uppercase text-coffee">
                            <FiLayers aria-hidden="true" />
                            Portfolio archive
                        </span>
                        <h2 className='mt-3 md:mt-5 text-second font-soldier lg:text-[66px] md:text-[42px] text-3xl font-semibold uppercase tracking-tight' data-aos="fade-up">
                            Project & works
                        </h2>
                        <p className="mt-2 md:mt-5 max-w-2xl font-poppins text-xs md:text-base leading-relaxed text-Primary/70" data-aos="fade-up">
                            Browse live projects grouped by category directly from the server.
                        </p>
                    </div>

                    {/* Counter Stats Grid */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:flex" data-aos="fade-up">
                        <div className="rounded-2xl border border-Primary/10 bg-white/60 md:bg-white/45 p-3.5 md:px-5 md:py-4 backdrop-blur-sm">
                            <strong className="block font-soldier text-3xl md:text-4xl leading-none text-Primary">{pagination?.total || '--'}</strong>
                            <span className="mt-1 block font-poppins text-[10px] md:text-xs font-semibold uppercase text-Primary/60">Projects</span>
                        </div>
                        <div className="rounded-2xl border border-Primary/10 bg-white/60 md:bg-white/45 p-3.5 md:px-5 md:py-4 backdrop-blur-sm">
                            <strong className="block font-soldier text-3xl md:text-4xl leading-none text-Primary">{categories.length || '--'}</strong>
                            <span className="mt-1 block font-poppins text-[10px] md:text-xs font-semibold uppercase text-Primary/60">Categories</span>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='relative mt-2 md:mt-8'>
                    {/* Fade Overlay */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-6 md:w-8 bg-gradient-to-r from-Primary via-Primary/60 to-transparent rounded-l-2xl" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 md:w-12 bg-gradient-to-l from-Primary via-Primary/80 to-transparent rounded-r-2xl" />

                    <div className="flex items-center gap-2 overflow-x-auto md:rounded-2xl rounded-lg border border-Primary/10 bg-Primary p-2" style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                        {categoryButtons.map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setSelected(btn.id)}
                                className={`shrink-0 py-2.5 px-3.5 md:py-3 md:px-4 duration-300 flex items-center gap-2 rounded-xl font-poppins text-xs font-bold cursor-pointer transition-all active:scale-95 ${selected === btn.id
                                    ? 'bg-coffee text-white shadow-lg shadow-coffee/25'
                                    : 'bg-brand/10 text-brand/75 hover:bg-brand/20 hover:text-brand'
                                    }`}
                            >
                                {btn.icon}
                                <span>{btn.label}</span>
                                <span className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${selected === btn.id ? 'bg-white/20' : 'bg-black/15'}`}>
                                    {btn.count || 0}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                {loading ? (
                    <div className="mt-[80px] flex flex-col items-center justify-center gap-4 py-10">
                        <div className="relative size-10">
                            <span className="absolute inset-0 rounded-full border-2 border-Primary/15"></span>
                            <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-coffee"></span>
                            <span className="absolute inset-[7px] animate-[spin_0.9s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-coffee/50"></span>
                        </div>
                        <p className="flex items-center gap-1 font-poppins text-xs font-semibold tracking-widest text-Primary/60 uppercase">
                            Loading projects
                            <span className="inline-flex gap-0.5">
                                <span className="size-1 animate-bounce rounded-full bg-coffee [animation-delay:-0.3s]"></span>
                                <span className="size-1 animate-bounce rounded-full bg-coffee [animation-delay:-0.15s]"></span>
                                <span className="size-1 animate-bounce rounded-full bg-coffee"></span>
                            </span>
                        </p>
                    </div>
                ) : error ? (
                    <div className="mt-[80px] flex flex-col items-center justify-center gap-3 py-10 text-center">
                        <span className="flex size-11 items-center justify-center rounded-full border border-red-500/20 text-red-500">
                            <FiAlertCircle className="text-xl" aria-hidden="true" />
                        </span>
                        <p className="font-poppins text-sm font-bold text-Primary">Something went wrong</p>
                        <p className="max-w-xs font-poppins text-xs text-Primary/60">{error}</p>
                    </div>
                ) : (
                    <div id='Projects-Cards-Row' className="mt-10">
                        <div className='mb-6 flex items-center gap-4'>
                            <span className="flex size-11 items-center justify-center rounded-full bg-Primary text-brand">
                                <FiGrid aria-hidden="true" />
                            </span>
                            <div className='h-px flex-1 bg-Primary/20'></div>
                        </div>
                        {projects.length > 0 ? (
                            <div className='flex flex-col md:gap-10 gap-6'>
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} project={project} scrollPreview={project.scrollPreview} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-[28px] border border-Primary/10 bg-white/50 p-8 font-poppins text-sm text-Primary/70">
                                No projects found in this category.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default AllProjects
