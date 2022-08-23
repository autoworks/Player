// A custom implementation of react-rotation
// https://github.com/andrepolischuk/react-rotation
//
// Reasons for customisation
// - Adds ability to stop autoplay by changing value of autoplay prop
//   e.g. use onChange to get current frame, stop autoplay after one rotation
//
// Side effects
// - As code was brought into project, it also needed to be formatted to fit
//   our standards, so was converted to hooks

import React, { cloneElement, Children, useEffect, useState } from 'react'
import {
  arrayOf,
  bool,
  element,
  func,
  number,
  oneOfType,
  string
} from 'prop-types'

const Rotation = ({
  autoPlay,
  children,
  className,
  tabIndex,
  scroll,
  pauseOnHover,
  cycle,
  onChange,
  reverse,
  vertical,
  initialFrame
}) => {
  const [hovered, toggleHovered] = useState(false)
  const [current, setCurrent] = useState(initialFrame)
  const [autoplayActive, toggleAutoplayActive] = useState(autoPlay)
  const [pointerPosition, updatePointerPosition] = useState(null)
  const [startFrame, updateStartFrame] = useState(null)

  const setCurrentFrame = (frame) => {
    const length = children.length
    let newCurrent = frame

    if (newCurrent < 0) {
      newCurrent = cycle ? newCurrent + length : 0
    }

    if (newCurrent > length - 1) {
      newCurrent = cycle ? newCurrent - length : length - 1
    }

    if (newCurrent !== current) {
      setCurrent(newCurrent)
      onChange(newCurrent, current, autoplayActive)
    } else if (autoplayActive) {
      stop()
    }
  }

  const nextFrame = () => {
    if (!hovered || !pauseOnHover) {
      setCurrentFrame(reverse ? current - 1 : current + 1)
    }
  }

  const stop = () => {
    toggleAutoplayActive(false)
  }

  const hover = () => {
    toggleHovered(true)
  }

  const unhover = () => {
    toggleHovered(false)
  }

  // TODO: continue working on this to avoid passive event listener error on wheel
  // https://github.com/facebook/react/issues/14856#issuecomment-586781399
  // useEffect(() => {
  //   const cancelWheel = (event) => hovered && event.preventDefault()
  //   document.body.addEventListener('wheel', cancelWheel, { passive: false })
  //   return () => {
  //     document.body.removeEventListener('wheel', cancelWheel)
  //   }
  // }, [hovered])

  const wheelMove = (e) => {
    e.preventDefault()
    const { deltaY } = e
    const delta = deltaY === 0 ? 0 : deltaY / Math.abs(deltaY)
    stop()
    setCurrentFrame(reverse ? current - delta : current + delta)
  }

  const touchStart = (e) => {
    e.preventDefault()
    updatePointerPosition(calculatePointerPosition(e))
    updateStartFrame(current)
    stop()
  }

  const touchMove = (e) => {
    const notTouched = typeof pointerPosition !== 'number'
    e.preventDefault()

    if (notTouched) {
      return
    }

    const { offsetWidth, offsetHeight } = e.currentTarget
    const pointer = calculatePointerPosition(e)
    const max = vertical ? offsetHeight : offsetWidth
    const offset = pointer - pointerPosition
    const delta = Math.floor((offset / max) * children.length)
    setCurrentFrame(reverse ? startFrame - delta : startFrame + delta)
  }

  const touchEnd = (e) => {
    e.preventDefault()
    updatePointerPosition(null)
    updateStartFrame(null)
  }

  const pressKey = (e) => {
    const eventOnField = e.target.tagName.match('TEXTAREA|INPUT|SELECT')

    if (eventOnField) {
      return
    }

    const prevKey = vertical ? 38 : 37
    const nextKey = vertical ? 40 : 39
    stop()

    if (e.keyCode === prevKey) {
      setCurrentFrame(reverse ? current + 1 : current - 1)
    } else if (e.keyCode === nextKey) {
      setCurrentFrame(reverse ? current - 1 : current + 1)
    }
  }

  const calculatePointerPosition = (e) => {
    const { clientX, clientY } =
      e.type.indexOf('touch') === 0 ? e.changedTouches[0] : e
    const { offsetTop, offsetLeft } = e.currentTarget
    return vertical ? clientY - offsetTop : clientX - offsetLeft
  }

  useEffect(() => {
    document.addEventListener('mouseup', touchEnd, false)
    return () => {
      document.removeEventListener('mouseup', touchEnd, false)
    }
  }, [])

  useEffect(() => {
    toggleAutoplayActive(autoPlay)
  }, [autoPlay])

  useEffect(() => {
    if (!autoplayActive) return stop()
    const playTimeout = autoplayActive === true ? 75 : autoplayActive
    const timer = setTimeout(() => {
      nextFrame()
    }, playTimeout)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div
      role="presentation"
      tabIndex={tabIndex}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
      onMouseDown={touchStart}
      onMouseMove={touchMove}
      onWheel={scroll ? wheelMove : null}
      onMouseEnter={hover}
      onMouseLeave={unhover}
      onKeyDown={tabIndex >= 0 ? pressKey : null}
      className={className}
      style={{ position: 'relative' }}
    >
      {Children.map(children, (child, i) =>
        cloneElement(child, {
          style: {
            width: '100%',
            display: current === i ? 'block' : 'none'
          }
        })
      )}
    </div>
  )
}

Rotation.defaultProps = {
  cycle: false,
  scroll: false,
  vertical: false,
  tabIndex: 0,
  autoPlay: false,
  pauseOnHover: false,
  onChange: () => {},
  initialFrame: 0
}

Rotation.propTypes = {
  className: string,
  cycle: bool,
  scroll: bool,
  vertical: bool,
  reverse: bool,
  autoPlay: oneOfType([bool, number]),
  onChange: func,
  children: arrayOf(element).isRequired,
  tabIndex: oneOfType([string, number]),
  pauseOnHover: bool,
  initialFrame: number
}

export default Rotation
