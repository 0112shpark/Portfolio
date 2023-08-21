import Loader from 'react-loaders'
import './index.scss'

import React, { useEffect, useState } from 'react'
import Animated from '../Animated'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div key={idx} className="image-box">
              <img
                className="portfolio-image"
                src={port.cover}
                alt="portfolio"
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <Animated
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
