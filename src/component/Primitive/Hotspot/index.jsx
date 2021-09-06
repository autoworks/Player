import React, { useEffect, useState } from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'
import classNames from 'classnames'

import styles from './Hotspot.module.scss'

const Hotspot = ({
  centered,
  onClick,
  revealDelay,
  tooltip,
  tooltipPosition
}) => {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true)
    }, 500 + revealDelay)
    return () => clearTimeout(timer)
  }, [revealDelay])

  return (
    <button
      className={classNames(
        styles.Hotspot,
        centered && styles.centered,
        revealed && styles.revealed
      )}
      style={{ ...(revealDelay && { '--hotspot-delay': `${revealDelay}ms` }) }}
      onClick={onClick}
    >
      <div className={styles.HotspotInner} />
      {tooltip && (
        <div
          className={classNames(styles.HotspotTooltip, styles[tooltipPosition])}
        >
          {tooltip}
        </div>
      )}
    </button>
  )
}

Hotspot.defaultProps = {
  tooltipPosition: 'top'
}

Hotspot.propTypes = {
  centered: bool,
  onClick: func,
  revealDelay: number,
  tooltip: string,
  tooltipPosition: oneOf(['top', 'right', 'bottom', 'left'])
}

export default Hotspot
