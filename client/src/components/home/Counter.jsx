import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import ProjectsIcon from '../../assets/images/CounterProjectIcon.png'
import TeamIcon from '../../assets/images/CounterTeamIcon.png'
import ReviewIcon from '../../assets/images/CounterReviewIcon.png'
import CompleteIcon from '../../assets/images/ReviewCompleteICon.png'

const counterItems = [
  {
    label: 'Projects delivered',
    value: 38,
    suffix: '+',
    icon: ProjectsIcon,
  },
  {
    label: 'Client reviews',
    value: 90,
    suffix: '+',
    icon: ReviewIcon,
  },
  {
    label: 'Team members',
    value: 12,
    suffix: '+',
    icon: TeamIcon,
  },
  {
    label: 'Completed work',
    value: 100,
    suffix: '+',
    icon: CompleteIcon,
  },
]

const Counter = () => {
  const expandRef = useRef(null)
  const speed = 6

  useEffect(() => {
    let animationFrameId = null

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollAndSpeed = window.pageYOffset / speed
        const newWidth = Math.min(Math.max(scrollAndSpeed, 72), 100)

        if (expandRef.current) {
          expandRef.current.style.width = `${newWidth}%`
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="Counter" className="counter-wrap">
      <section id="CounterBG" className="counter-panel" ref={expandRef}>
        <div className="counter-panel__intro">
          <span>Impact snapshot</span>
          <p>Recent project outcomes and delivery numbers</p>
        </div>

        <div id="counterDiv" className="counter-grid">
          {counterItems.map((item) => (
            <div className="counter-card" key={item.label}>
              <span className="counter-card__icon">
                <img src={item.icon} alt="" />
              </span>
              <span className="counter-card__value">
                <CountUp enableScrollSpy end={item.value} duration={4} />
                {item.suffix}
              </span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Counter
