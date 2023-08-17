import React, { useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'

const Locate = () => {
  const [positions, setPositions] = useState([37.56667, 126.97806])

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPositions(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return (
    <Marker position={positions}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default Locate
