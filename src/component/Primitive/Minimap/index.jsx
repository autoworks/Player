import React, { useEffect, useRef, useState } from 'react'
import { func, number, string } from 'prop-types'
import { MapInteractionCSS } from 'react-map-interaction'
import {
  mapTranslationToDecimal,
  mapTranslationToPixel
} from '@/lib/map-translation-converter'

import styles from './Minimap.module.scss'

import ResponsiveMedia from '../ResponsiveMedia'

const Minimap = ({ onChange, ratio, scale, src, x, y }) => {
  const [formattedValue, updateFormattedValue] = useState({
    scale: 1,
    translation: {
      x: 0.5,
      y: 0.5
    }
  })

  const wrapper = useRef()

  // const handleClick = (e) => {
  //   const { top, left } = wrapper.current.getBoundingClientRect()
  //   handleChange({
  //     scale,
  //     translation: {
  //       x: e.clientX - left - (scale * wrapper.current.clientWidth) / 2,
  //       y: e.clientY - top - (scale * wrapper.current.clientHeight) / 2
  //     }
  //   })
  // }

  const handleChange = ({ scale, translation }) => {
    const newTranslation = mapTranslationToDecimal({
      scale,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      offsetX: translation.x,
      offsetY: translation.y
    })
    onChange && onChange({ scale, translation: newTranslation })
  }

  useEffect(() => {
    const newTranslation = mapTranslationToPixel({
      scale,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      offsetX: x,
      offsetY: y
    })
    updateFormattedValue({ scale, translation: newTranslation })
  }, [x, y, scale])

  return (
    <div className={styles.Minimap} style={{ backgroundImage: `url(${src})` }}>
      <ResponsiveMedia ratio={ratio}>
        <div
          className={styles.MinimapInner}
          ref={wrapper}
          // onClick={handleClick}
        >
          <MapInteractionCSS
            value={formattedValue}
            onChange={handleChange}
            disableZoom
          >
            <ResponsiveMedia ratio={ratio}>
              <div
                className={styles.MinimapIndicator}
                style={{
                  borderWidth: `${1.5 / scale}px`
                }}
              />
            </ResponsiveMedia>
          </MapInteractionCSS>
        </div>
      </ResponsiveMedia>
    </div>
  )
}

Minimap.defaultProps = {
  ratio: 10 / 16,
  scale: 1,
  x: 0.5,
  y: 0.5
}

Minimap.propTypes = {
  onChange: func,
  ratio: number,
  scale: number,
  src: string.isRequired,
  x: number,
  y: number
}

export default Minimap
