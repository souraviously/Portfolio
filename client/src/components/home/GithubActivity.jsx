import React, { useEffect, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiCalendar, FiGitBranch, FiUsers } from 'react-icons/fi'

const GITHUB_USERNAME = 'souravson1'
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`
const CONTRIBUTION_GRAPH = `https://ghchart.rshah.org/BF4A1A/${GITHUB_USERNAME}`

const GithubActivity = () => {
  const [profile, setProfile] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    const loadGithubProfile = async () => {
      try {
        const profileResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          signal: controller.signal,
        })

        if (!profileResponse.ok) {
          throw new Error('GitHub request failed')
        }

        const profileData = await profileResponse.json()
        setProfile(profileData)
        setStatus('ready')
      } catch (error) {
        if (error.name === 'AbortError') return
        setStatus('error')
      }
    }

    loadGithubProfile()

    return () => controller.abort()
  }, [])

  const activityStats = useMemo(() => {
    return [
      { label: 'Public repos', value: profile?.public_repos ?? '--', icon: <FiGitBranch /> },
      { label: 'Followers', value: profile?.followers ?? '--', icon: <FiUsers /> },
      { label: '365 day graph', value: 'Live', icon: <FiCalendar /> },
    ]
  }, [profile])

  return (
    <div
      className="rounded-[22px] border border-brand/15 bg-[#161616] p-5 text-brand shadow-[0_28px_70px_rgba(22,22,22,0.25)] sm:p-6"
      data-aos="fade-up"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex size-[58px] shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-brand/15 bg-brand/10">
            {profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : <FaGithub />}
          </span>
          <div>
            <p className="font-poppins text-xs font-bold uppercase text-coffee">
              GitHub contribution calendar
            </p>
            <h3 className="mt-1 font-soldier text-[36px] font-bold uppercase leading-none">
              {profile?.name || GITHUB_USERNAME}
            </h3>
          </div>
        </div>

        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noreferrer"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-brand/10 text-brand transition hover:bg-brand hover:text-Primary"
          aria-label="Open GitHub profile"
        >
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {activityStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-brand/10 bg-brand/10 px-4 py-3"
          >
            <span className="mb-3 flex size-8 items-center justify-center rounded-xl bg-coffee/15 text-coffee">
              {stat.icon}
            </span>
            <strong className="block font-poppins text-[22px] leading-none">{stat.value}</strong>
            <span className="mt-1 block font-poppins text-[11px] font-semibold text-brand/65">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-brand/10 bg-brand/[0.06] md:p-4">
        {status === 'loading' && <p className="font-poppins text-sm text-brand/70">Loading GitHub profile...</p>}
        {status === 'error' && (
          <p className="font-poppins text-sm leading-6 text-brand/70">
            GitHub profile stats are unavailable right now, but the contribution graph can still
            be opened from the profile link.
          </p>
        )}
        <div className="overflow-x-auto" style={{
          overflow: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(156,163,175,.5) transparent",
          msOverflowStyle: "none",
        }}>
          <div className='max-w-[300px] md:w-auto'>
          <img
            src={CONTRIBUTION_GRAPH}
            alt={`${GITHUB_USERNAME} GitHub contribution calendar for the last year`}
            className="min-w-[660px] rounded-xl bg-brand p-3"
            loading="lazy"
          />

          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubActivity
