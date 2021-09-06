import React from 'react'
import { string } from 'prop-types'

import ResponsiveMedia from '../ResponsiveMedia'
import HotspotFrame from '../HotspotFrame'

function safelyParseJSON(json) {
  let parsed
  try {
    parsed = JSON.parse(json)
  } catch (e) {}
  return parsed
}

const HotspotDebugger = ({ hotspots, src }) => {
  const parsedHotspots = safelyParseJSON(hotspots)
  const formattedHotspots = Array.isArray(parsedHotspots) ? parsedHotspots : []
  return (
    <ResponsiveMedia ratio={10 / 16}>
      <HotspotFrame hotspots={formattedHotspots} hotspotDebug>
        {src && <img src={src} alt="" />}
      </HotspotFrame>
    </ResponsiveMedia>
  )
}

HotspotDebugger.propTypes = {
  src: string,
  hotspots: string // TODO: shape
}

export default HotspotDebugger
