import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  alt,
  arrayOf,
  bool,
  func,
  number,
  objectOf,
  shape,
  string
} from 'prop-types'
import { HotspotDebugContext } from '@/component/Context/HotspotDebugContext'
import shapeHotspotStandard from '@/shape/hotspot-standard'

import styles from './Rotator.module.scss'

import Rotation from './component/Rotation'

import HotspotFrame from '../HotspotFrame'
import ResponsiveMedia from '../ResponsiveMedia'
import ResponsiveImage from '../ResponsiveImage'
import LoadingProgress from '../LoadingProgress'
import VisuallyHidden from '../VisuallyHidden'

// This component uses Firefox browser detection :(
// It's a work-around to overcome a bug where images don't render quickly enough
// on first showing to keep up with the rotation, causing a nasty flicker effect
//
// Solution:
// As each image loads, add it as a _tiny_ background image to the wrapping
// element, where it can flicker all it likes, meaning it's ready to use at
// full size as/when the Rotator needs it
//
// Similar issues:
// https://bugzilla.mozilla.org/show_bug.cgi?id=1156762
// https://bugzilla.mozilla.org/show_bug.cgi?id=705826

const Rotator = ({
  hotspotDebug,
  images,
  inactive,
  initialIndex,
  onHotspotClick,
  onRotate,
  ratio,
  reverseDirection,
  scroll,
  useSwipeToSpin
}) => {
  const loadingTimeout = 5000
  const [activeImageIndex, updateActiveImageIndex] = useState(0)
  const [autoplay, toggleAutoplay] = useState(loadingTimeout)
  const [revealHotspots, setRevealHotspots] = useState(false)
  const [loadedCount, updateLoadedCount] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [loadTimerComplete, setLoadTimerComplete] = useState(false)
  const [initialised, setInitialised] = useState(false)
  const [loadedImages, updateLoadedImages] = useState([])
  const [isFirefox, setIsFirefox] = useState(false)
  const [wrapperWidth, updateWrapperWidth] = useState(0)
  const [hasRotated, setHasRotated] = useState(false)

  useEffect(() => {
    updateWrapperWidth(wrapper.current.clientWidth)
  }, [])

  const wrapper = useRef()

  const handleImageChange = (i, oldFrame, playerAutoplay) => {
    if (i >= 0 && i < images.length) {
      updateActiveImageIndex(i)
    }

    if (i === parseInt(initialIndex, 10)) {
      toggleAutoplay(false)
      setRevealHotspots(true)
    }

    if (!playerAutoplay && !autoplay && onRotate) {
      onRotate({ newFrame: i, previousFrame: oldFrame })
      setHasRotated(true)
    }
  }

  const handleImageLoad = (e) => {
    if (isFirefox) {
      const currentSrc = e.target.currentSrc
      updateLoadedImages((arr) => [...arr, currentSrc])
    }

    const newLoadedCount = loadedCount + 1
    updateLoadedCount(newLoadedCount)

    if (newLoadedCount === images.length) {
      setLoadingComplete(true)
      if (!loadTimerComplete) toggleAutoplay(30)
    }
  }

  useEffect(() => {
    if (!initialised) return
    const timer = setTimeout(() => {
      setLoadTimerComplete(true)
      if (!loadingComplete) setRevealHotspots(true)
    }, loadingTimeout)
    return () => clearTimeout(timer)
  }, [initialised, loadingComplete])

  useEffect(() => {
    if (!inactive && !initialised) {
      setInitialised(true)
    }
  }, [inactive, initialised])

  useEffect(() => {
    setIsFirefox(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
  }, [])

  const contextHotspotDebug = useContext(HotspotDebugContext)
  const derivedHotspotDebug = hotspotDebug || contextHotspotDebug

  return (
    <div className={styles.Rotator} ref={wrapper}>
      {alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      <ResponsiveMedia ratio={ratio}>
        {initialised && (
          <div
            {...(isFirefox && {
              style: {
                backgroundImage: loadedImages
                  .map((src) => `url(${src})`)
                  .join(','),
                backgroundSize: '0px 0px',
                backgroundRepeat: 'no-repeat'
              }
            })}
          >
            <Rotation
              cycle
              scroll={scroll}
              reverse={reverseDirection}
              onChange={handleImageChange}
              autoPlay={autoplay}
              initialIndex={parseInt(initialIndex, 10)}
            >
              {images.map((image, i) => {
                const getLoadingPriority = () => {
                  if (i === initialIndex) return 'eager'
                  if (initialised) return 'auto'
                  return 'lazy'
                }
                return (
                  <div key={`RotatorImage${i}`}>
                    <ResponsiveImage
                      alt=""
                      srcSet={
                        image.srcSet &&
                        Object.entries(image.srcSet).map((src) => {
                          return {
                            width: parseInt(src[0], 10),
                            src: src[1]
                          }
                        })
                      }
                      sizes={[`${wrapperWidth}px`]}
                      src={image.src}
                      width={1000}
                      height={562}
                      onLoad={handleImageLoad}
                      onError={handleImageLoad}
                      loading={getLoadingPriority()}
                    />
                  </div>
                )
              })}
            </Rotation>

            {revealHotspots && (
              <div className={styles.RotatorHotspots}>
                <HotspotFrame
                  hotspots={images[activeImageIndex].hotspots}
                  hotspotDebug={hotspotDebug}
                  onClick={onHotspotClick}
                />
              </div>
            )}

            {!loadingComplete && !loadTimerComplete && (
              <div className={styles.RotatorProgress}>
                <LoadingProgress
                  progress={(loadedCount / images.length) * 100}
                  inverse
                />
              </div>
            )}

            {derivedHotspotDebug && (
              <div className={styles.RotatorDebugOverlay}>
                Image {activeImageIndex + 1} of {images.length}
                <span>(index: {activeImageIndex})</span>
              </div>
            )}
          </div>
        )}
      </ResponsiveMedia>
      {useSwipeToSpin && loadingComplete && !hasRotated && (
        <div className={styles.UserInteractionHelper}>
          <img src="swipe-animation.apng" alt="" />
          <span>Swipe to spin</span>
        </div>
      )}
    </div>
  )
}

Rotator.defaultProps = {
  images: [],
  onReady: () => {},
  initialIndex: 0,
  ratio: 10 / 16
}

Rotator.propTypes = {
  alt: string,
  hotspotDebug: bool,
  images: arrayOf(
    shape({
      src: string.isRequired,
      srcSet: objectOf(string),
      hotspots: arrayOf(shape(shapeHotspotStandard))
    })
  ),
  inactive: bool,
  initialIndex: number,
  onHotspotClick: func,
  onRotate: func,
  ratio: number,
  reverseDirection: bool,
  scroll: bool,
  useSwipeToSpin: bool
}

export default Rotator
