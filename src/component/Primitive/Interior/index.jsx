import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { arrayOf, bool, func, number, shape, string } from 'prop-types'

import shapeHotspotInterior from '@/shape/hotspot-interior'

import { HotspotDebugContext } from '@/component/Context/HotspotDebugContext'

import styles from './Interior.module.scss'
import '@/component/Primitive/Hotspot/Hotspot.module.scss'

import ButtonSingle from '../ButtonSingle'
import Inline from '../Inline'
import ResponsiveMedia from '@/component/Primitive/ResponsiveMedia'
import VisuallyHidden from '../VisuallyHidden'

import InteriorPanorama from '@/component/Primitive/InteriorPanorama'

const Interior = ({
  alt,
  controls,
  hotspotDebug,
  hotspots,
  inactive,
  onHotspotClick,
  poster,
  ratio,
  src,
  mouseZoom,
  minHfov,
  maxHfov,
  hfov,
  pitch,
  yaw
}) => {
  const [active, setActive] = useState(false)
  const [trackedHfov, updateHfov] = useState(hfov)
  const [initialised, setInitialised] = useState(false)

  const contextHotspotDebug = useContext(HotspotDebugContext)
  const derivedHotspotDebug = hotspotDebug || contextHotspotDebug
  const viewer = useRef()

  const handleActive = () => {
    setActive(true)
    if (!viewer.current) return

    if (hotspots.length > 0) {
      const thisViewer = viewer.current.getViewer()
      const firstHotspot = hotspots.find((hotspot) => hotspot.autoFocus)
      if (!firstHotspot) return
      firstHotspot.pitch && thisViewer.setPitch(firstHotspot.pitch, 2000)
      firstHotspot.yaw && thisViewer.setYaw(firstHotspot.yaw, 2000)
      firstHotspot.hfov && thisViewer.setHfov(firstHotspot.hfov, 3000)
    }
  }

  const handleZoomIn = () => {
    const thisViewer = viewer.current.getViewer()
    const nextHfov = Math.max(thisViewer.getHfov() - 10, minHfov)
    thisViewer.setHfov(nextHfov, 100)
    updateHfov(nextHfov)
  }

  const handleZoomOut = () => {
    const thisViewer = viewer.current.getViewer()
    const nextHfov = Math.min(thisViewer.getHfov() + 10, maxHfov)
    thisViewer.setHfov(nextHfov, 100)
    updateHfov(nextHfov)
  }

  useEffect(() => {
    if (!inactive && !initialised) {
      setInitialised(true)
    }
  }, [inactive, initialised])

  return (
    <div className={classNames(styles.Interior, active && styles.active)}>
      {alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      <ResponsiveMedia ratio={ratio}>
        {initialised && (
          <div>
            <InteriorPanorama
              image={src}
              preview={poster}
              hotspotDebug={derivedHotspotDebug}
              setRef={viewer}
              onLoad={handleActive}
              hotspots={hotspots}
              onHotspotClick={onHotspotClick}
              defaultPosition={{ hfov, pitch, yaw }}
              hfovScale={{ minHfov, maxHfov }}
              mouseZoom={mouseZoom}
            />

            {controls && (
              <div className={styles.InteriorControls}>
                <Inline gap="small">
                  <ButtonSingle
                    inverse
                    icon="add"
                    a11yText="Zoom in"
                    onClick={handleZoomIn}
                    disabled={trackedHfov <= minHfov ? true : null}
                  />
                  <ButtonSingle
                    inverse
                    icon="remove"
                    a11yText="Zoom out"
                    onClick={handleZoomOut}
                    disabled={trackedHfov >= maxHfov ? true : null}
                  />
                </Inline>
              </div>
            )}
          </div>
        )}
      </ResponsiveMedia>
    </div>
  )
}

Interior.defaultProps = {
  ratio: 10 / 16,
  minHfov: 50,
  maxHfov: 120,
  hfov: 100,
  pitch: 0,
  yaw: 0
}

Interior.propTypes = {
  alt: string,
  controls: bool,
  hotspotDebug: bool,
  hotspots: arrayOf(shape(shapeHotspotInterior)),
  inactive: bool,
  onHotspotClick: func,
  poster: string.isRequired,
  ratio: number,
  src: string.isRequired,
  mouseZoom: bool,
  minHfov: number,
  maxHfov: number,
  hfov: number,
  pitch: number,
  yaw: number
}

export default Interior
