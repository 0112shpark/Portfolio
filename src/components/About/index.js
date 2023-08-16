import React, { useEffect, useState } from 'react'
import './index.scss'
import Animated from '../Animated'
import C from '../../assets/images/C++.png'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faLinux,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            ></Animated>
          </h1>
          <p>안녕하세요, 프론트엔드 개발자 박성현입니다.</p>
          <p>
            현재 서강대학교 컴퓨터공학과에 재학중이며 24년 2월 졸업예정입니다.
            HTML, CSS, JavaScript를 사용해 React Web Application개발을 주로 하고
            있습니다. 여러 Web Application 프로젝트 경험이 있으며 실제
            배포경험까지 갖추고 있습니다.
          </p>
          <p>
            또한, 교내 수업과 프로젝트들을 통해 C++과 Linux를 사용한 시스템 관련
            개발 경험이 있습니다. 이러한 경험들을 통해 얻은 능력으로 Web 기반
            시스템 개발에 참여해보고 싶습니다.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} color="#111" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
