import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import Animated from '../Animated'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import Locate from './locate'

const Contact = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0112shpark',
        'template_8776gca',
        refForm.current,
        'uRj7tExNTOwQJBbfh'
      )
      .then(
        (result) => {
          alert('Message Successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message due to ' + error)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            ></Animated>
          </h1>
          <p>궁금하신 점이 있으시면 아래 메일로 연락주시면 감사하겠습니다!</p>
          <p>&nbsp;</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email to get respond"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          SeongHyeon Park,
          <br />
          Republic of Korea.
          <br />
          <br />
          Click to relocate you on the map.
          <br />
          <span>000112shpark@naver.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.56667, 126.97806]} zoom={15}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Locate />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
