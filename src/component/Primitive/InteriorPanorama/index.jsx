import React from 'react'
import { array, bool, func, object, string } from 'prop-types'
import { render } from 'react-dom'

import Pannellum from '@/component/Primitive/PannellumReact'
import Hotspot from '@/component/Primitive/Hotspot'

import styles from './InteriorPanorama.module.scss'

const hotspotTooltip = (hotSpotDiv, args) => {
  hotSpotDiv.setAttribute('id', 'textInfo')
  render(<Hotspot tooltip={args.tooltip || ''} />, hotSpotDiv)
}

const InteriorPanorama = ({
  hotspotDebug,
  hotspots,
  image,
  onHotspotClick,
  onLoad,
  preview,
  setRef,
  position,
  hfovScale,
  mouseZoom
}) => (
  <div className={styles.InteriorPanorama}>
    <Pannellum
      width="100%"
      height="100%"
      image={image}
      autoLoad
      preview={preview}
      hotspotDebug={hotspotDebug}
      showFullscreenCtrl={false}
      showZoomCtrl={false}
      ref={setRef}
      onLoad={onLoad}
      {...position}
      {...hfovScale}
      mouseZoom={mouseZoom}
      // onRender={handleRender}
    >
      {hotspots.map((hotspot, i) => (
        <Pannellum.Hotspot
          key={`InteriorHotspot:${i}`}
          type="custom"
          pitch={hotspot.pitch}
          yaw={hotspot.yaw}
          text={hotspot.tooltip}
          handleClick={() => {
            onHotspotClick && onHotspotClick(hotspot.id)
          }}
          cssClass=""
          tooltip={hotspotTooltip}
          tooltipArg={{ tooltip: hotspot.tooltip }}
        />
      ))}
    </Pannellum>
  </div>
)

InteriorPanorama.propTypes = {
  hotspotDebug: bool,
  hotspots: array,
  image: string,
  onHotspotClick: func,
  onLoad: func,
  preview: string,
  setRef: object,
  position: object,
  hfovScale: object,
  mouseZoom: bool
}

export default InteriorPanorama
