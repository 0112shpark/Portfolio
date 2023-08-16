import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Animated from '../Animated'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = [
    'e',
    'o',
    'n',
    'g',
    'h',
    'y',
    'e',
    'o',
    'n',
    ' ',
    'P',
    'a',
    'r',
    'k',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <Animated letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <Animated letterClass={letterClass} strArray={jobArray} idx={29} />
          </h1>
          <h2>Frontend Developer / Linux Programmer / C++ Programmer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
