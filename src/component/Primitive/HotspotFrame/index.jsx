import React, { useContext, useRef } from 'react'
import { array, bool, func, node, number } from 'prop-types'
import classNames from 'classnames'
import { HotspotDebugContext } from '@/component/Context/HotspotDebugContext'

import styles from './HotspotFrame.module.scss'

import Hotspot from '../Hotspot'

const getTooltipPosition = ({ x, y }) => {
  if (y < 0.1) return 'bottom'
  if (y > 0.9) return 'top'
  if (x < 0.1) return 'right'
  if (x > 0.9) return 'left'
}

const HotspotFrame = ({ children, hotspotDebug, hotspots, onClick, scale }) => {
  const contextHotspotDebug = useContext(HotspotDebugContext)
  const derivedHotspotDebug = hotspotDebug || contextHotspotDebug
  const frame = useRef()

  const handleDebugHotspot = (e) => {
    e.preventDefault()
    const { clientX, clientY } = e

    const wrapperCoords = frame.current.getBoundingClientRect()

    const rawX =
      ((clientX - wrapperCoords.x) * scale) / (wrapperCoords.width * scale)
    const rawY =
      ((clientY - wrapperCoords.y) * scale) / (wrapperCoords.height * scale)

    const hotspot = {
      id: '',
      tooltip: '',
      x: +rawX.toFixed(5),
      y: +rawY.toFixed(5)
    }

    console.log(JSON.stringify(hotspot, '', 2))
  }

  return (
    <div
      className={classNames(styles.HotspotFrame, hotspotDebug && styles.debug)}
      {...(derivedHotspotDebug && { onClick: handleDebugHotspot })}
      ref={frame}
    >
      {children}
      <div className={styles.HotspotFrameList}>
        {hotspots.map((hotspot, i) => (
          <div
            key={`Hotspot:${i}`}
            className={styles.HotspotFrameItem}
            style={{
              left: `${100 * hotspot.x}%`,
              top: `${100 * hotspot.y}%`,
              transform: `scale(${1 / scale})`
            }}
          >
            <Hotspot
              tooltip={hotspot.tooltip}
              tooltipPosition={getTooltipPosition({
                x: hotspot.x,
                y: hotspot.y
              })}
              centered
              revealDelay={i * 50}
              onClick={() => {
                onClick(hotspot.id)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

HotspotFrame.defaultProps = {
  hotspots: [],
  scale: 1,
  onClick: () => {}
}

HotspotFrame.propTypes = {
  children: node,
  hotspotDebug: bool,
  hotspots: array, // TODO: shape
  onClick: func,
  scale: number
}

export default HotspotFrame
