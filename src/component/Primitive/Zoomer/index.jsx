import React, { useEffect, useRef, useState } from 'react'
import {
  arrayOf,
  bool,
  func,
  number,
  objectOf,
  shape,
  string
} from 'prop-types'
import classNames from 'classnames'

import styles from './Zoomer.module.scss'

import Spinner from '../Spinner'
import ButtonSingle from '../ButtonSingle'
import ResponsiveMedia from '../ResponsiveMedia'
import Minimap from '../Minimap'
import Inline from '../Inline'
import ZoomerImage from '../ZoomerImage'

import shapeHotspotStandard from '@/shape/hotspot-standard'

const Zoomer = ({
  alt,
  controls,
  defaultScale,
  disableZoom,
  hotspots,
  loading,
  max,
  min,
  minimap,
  onHotspotClick,
  ratio,
  src,
  srcSet,
  step,
  priorityLoading
}) => {
  const [initialised, setInitialised] = useState(false)
  const [scale, updateScale] = useState(defaultScale)
  const [decimalTranslation, updateDecimalTranslation] = useState({
    x: 0.5,
    y: 0.5
  })

  const wrapper = useRef()

  const clamp = (min, value, max) => Math.min(Math.max(value, min), max)

  const handleChange = ({ scale, translation }) => {
    const newScale = clamp(min, scale, max)
    const newTranslation = {
      x: clamp(0, translation.x, 1),
      y: clamp(0, translation.y, 1)
    }
    updateScale(newScale)
    updateDecimalTranslation(newTranslation)
  }

  const handleMinimapChange = ({ scale, translation }) => {
    const newScale = clamp(min, 1 / scale, max)
    const newTranslation = {
      x: clamp(0, translation.x, 1),
      y: clamp(0, translation.y, 1)
    }
    updateScale(newScale)
    updateDecimalTranslation(newTranslation)
  }

  const handleZoomIn = () => {
    updateScale(clamp(min, scale + step, max))
  }

  const handleZoomOut = () => {
    updateScale(clamp(min, scale - step, max))
  }

  const handleReset = () => {
    updateScale(1)
    updateDecimalTranslation({ x: 0.5, y: 0.5 })
  }

  useEffect(() => {
    if (priorityLoading) {
      setInitialised(true)
    }
  }, [priorityLoading])

  return (
    <div className={styles.Zoomer}>
      <ResponsiveMedia ratio={ratio}>
        <div className={styles.ZoomerInner} ref={wrapper}>
          {controls && (
            <div className={styles.ZoomerControls}>
              <Inline gap="small">
                <ButtonSingle
                  inverse
                  icon="add"
                  inactive
                  a11yText="Zoom in"
                  onClick={handleZoomIn}
                  disabled={scale >= max}
                />
                <ButtonSingle
                  inverse
                  icon="remove"
                  inactive
                  a11yText="Zoom out"
                  onClick={handleZoomOut}
                  disabled={scale <= min}
                />
                <div
                  className={classNames(
                    styles.ZoomerButtonReset,
                    scale !== 1 && styles.active
                  )}
                >
                  <ButtonSingle
                    inverse
                    icon="refresh"
                    a11yText="Reset"
                    onClick={handleReset}
                  />
                </div>
              </Inline>
            </div>
          )}
          <ZoomerImage
            scale={scale}
            ratio={ratio}
            x={decimalTranslation.x}
            y={decimalTranslation.y}
            onChange={handleChange}
            disableZoom={disableZoom}
            hotspots={hotspots}
            onHotspotClick={onHotspotClick}
            image={{
              alt,
              src,
              srcSet,
              minimap
            }}
            minScale={min}
            maxScale={max}
            initialised={initialised}
          />
        </div>
        {loading && (
          <div className={styles.ZoomerLoader}>
            <Spinner spinning />
          </div>
        )}
      </ResponsiveMedia>
      {!disableZoom && controls && minimap && (
        <div
          className={classNames(
            styles.ZoomerMinimap,
            scale !== 1 && styles.active
          )}
        >
          <Minimap
            scale={1 / scale}
            ratio={ratio}
            x={decimalTranslation.x}
            y={decimalTranslation.y}
            onChange={handleMinimapChange}
            src={minimap}
          />
        </div>
      )}
    </div>
  )
}

Zoomer.defaultProps = {
  defaultScale: 1,
  max: 4,
  min: 1,
  ratio: 10 / 16,
  step: 0.5
}

Zoomer.propTypes = {
  alt: string,
  controls: bool,
  defaultScale: number,
  hotspots: arrayOf(shape(shapeHotspotStandard)),
  loading: bool,
  max: number,
  min: number,
  minimap: string.isRequired,
  onHotspotClick: func,
  ratio: number,
  src: string.isRequired,
  srcSet: objectOf(string),
  step: number,
  disableZoom: bool,
  priorityLoading: bool
}

export default Zoomer
