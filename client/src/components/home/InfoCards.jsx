import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { AiOutlineApi } from 'react-icons/ai'
import { SlGlobe } from 'react-icons/sl'
import { FaFigma } from 'react-icons/fa'
import { MdManageHistory } from 'react-icons/md'
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'
import Magnet from '../effects/Magnet'

const services = [
  {
    number: '01',
    title: 'Web development',
    label: 'Frontend builds',
    icon: SlGlobe,
    theme: 'dark',
    description:
      'I create modern, responsive, and user-friendly websites with clean UI systems, smooth interactions, fast load times, and scalable frontend architecture for every screen size.',
    points: ['Responsive layouts', 'Modern frontend stack', 'Performance-minded UI'],
  },
  {
    number: '02',
    title: 'Api integration',
    label: 'Connected apps',
    icon: AiOutlineApi,
    theme: 'light',
    description:
      'I connect frontend products with reliable APIs, real-time data, dynamic content, forms, dashboards, and backend services so the experience feels seamless from end to end.',
    points: ['Real-time data flows', 'Client-server sync', 'Clean error states'],
  },
  {
    number: '03',
    title: 'Figma to website',
    label: 'Design to code',
    icon: FaFigma,
    theme: 'dark',
    description:
      'I convert Figma designs into responsive, production-ready websites with careful spacing, sharp visual details, reusable components, and polished behavior across devices.',
    points: ['Pixel-conscious builds', 'Reusable components', 'Responsive sections'],
  },
  {
    number: '04',
    title: 'Web management',
    label: 'Ongoing care',
    icon: MdManageHistory,
    theme: 'light',
    description:
      'I keep websites healthy with updates, security monitoring, speed optimization, content support, and backups so the product stays fast, secure, and easy to maintain.',
    points: ['Regular maintenance', 'Speed optimization', 'Security checks'],
  },
]

const InfoCards = () => {
  useEffect(() => {
    if (typeof aat === 'undefined') return

    const { ScrollObserver, valueAtPercentage } = aat
    const cardsContainer = document.querySelector('#ScrollCards .cards')
    const cards = document.querySelectorAll('#ScrollCards .card')

    if (!cardsContainer || cards.length === 0) return

    cardsContainer.style.setProperty('--cards-count', cards.length)
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`)

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 15 + index * 15
      card.style.paddingTop = `${offsetTop}px`

      if (index === cards.length - 1) return

      const toScale = 1 - (cards.length - 1 - index) * 0.1
      const nextCard = cards[index + 1]
      const cardInner = card.querySelector('.card__inner')

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        })
        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`
      })
    })
  }, [])

  return (
    <section id="ScrollCards">
      <div className="cards">
        {services.map((service, index) => {
          const Icon = service.icon
          const isDark = service.theme === 'dark'

          return (
            <div className="card" data-index={index} key={service.number}>
              <div
                className={`card__inner info-card info-card--${service.theme}`}
                id={isDark ? 'ServicesBG' : undefined}
              >
                <div className="card__content info-card__content">
                  <div className="info-card__top">
                    <span className="info-card__label">{service.label}</span>
                    <span className="info-card__number">{service.number}</span>
                  </div>

                  <div className="info-card__heading">
                    <span className="info-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="card__title info-card__title font-soldier uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <p className="card__description info-card__description">
                    {service.description}
                  </p>

                  <div className="info-card__footer">
                    <ul className="info-card__points">
                      {service.points.map((point) => (
                        <li key={point}>
                          <FiCheckCircle aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Magnet magnetStrength={4} padding={20}>
                      <div className="magnetic-btn">
                        <Link
                          to="/about"
                          className="info-card__link transition-trigger font-poppins font-semibold hover-this"
                          aria-label={`View projects for ${service.title}`}
                        >
                          <span>View projects</span>
                          <FiArrowUpRight aria-hidden="true" />
                        </Link>
                      </div>
                    </Magnet>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default InfoCards
