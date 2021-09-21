import React, { cloneElement, useEffect, useState } from 'react'
import {
  array,
  bool,
  func,
  node,
  number,
  object,
  oneOfType,
  shape,
  string
} from 'prop-types'
import classNames from 'classnames'

import SwiperCore, { Keyboard, History } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './ViewerCarousel.module.scss'

import PaginationButton from '../PaginationButton'

const ViewerCarousel = ({
  activeItem,
  history,
  initialSlide,
  inverse,
  onChange,
  showcase,
  slides,
  thumbnails,
  watermark
}) => {
  const swiperPlugins = [Keyboard]
  history && swiperPlugins.push(History)
  SwiperCore.use(swiperPlugins)
  // const [hashSlide, setHashSlide] = useState()
  const [activeSlide, setActiveSlide] = useState(initialSlide || 0)
  const [viewerSwiper, setViewerSwiper] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [mounted, setMounted] = useState(false)

  // Ensures thumbsSwiper initialises its active slide correctly
  useEffect(() => {
    thumbsSwiper && thumbsSwiper.slideTo(activeSlide)
  }, [activeSlide, thumbsSwiper])

  useEffect(() => {
    viewerSwiper &&
      viewerSwiper.slideTo(
        activeItem.index,
        !mounted ? 0 : 500,
        setMounted(true)
      )
  }, [activeItem, viewerSwiper, mounted])

  const handlePrev = () => {
    viewerSwiper.slidePrev()
  }

  const handleNext = () => {
    viewerSwiper.slideNext()
  }

  const handleSlideChange = (a) => {
    setActiveSlide(a.realIndex)
    onChange && onChange(a.realIndex)
  }

  const handleThumbClick = (a) => {
    if (!(a.clickedIndex >= 0)) return
    setActiveSlide(a.clickedIndex)
    onChange && onChange(a.clickedIndex)
  }

  return (
    <div className={styles.ViewerCarousel}>
      <div className={styles.ViewerCarouselPrimary}>
        <Swiper
          onSwiper={setViewerSwiper}
          onSlideChange={handleSlideChange}
          allowTouchMove={false}
          keyboard
          history={history}
        >
          {slides.map((slide, i) => (
            <SwiperSlide data-history={slide.id || i} key={`Swiper:${i}`}>
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
        {showcase && watermark && (
          <div
            className={classNames(
              styles.ViewerCarouselLogo,
              activeItem.type === 'video' && styles.inactive
            )}
          >
            {watermark}
          </div>
        )}
      </div>
      {thumbnails.length > 1 && (
        <div className={styles.ViewerCarouselSecondary}>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView="auto"
            centeredSlides
            centeredSlidesBounds
            centerInsufficientSlides
            spaceBetween={8}
            className="swiper-container__filmstrip"
            onClick={handleThumbClick}
          >
            {thumbnails.map((thumbnail, i) => (
              <SwiperSlide key={`SwiperSlide:${i}`} style={{ width: 'auto' }}>
                {cloneElement(thumbnail, { active: activeSlide === i })}
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={classNames(
              styles.ViewerCarouselButton,
              styles.ViewerCarouselButtonPrevious
            )}
          >
            <PaginationButton
              direction="previous"
              onClick={handlePrev}
              disabled={activeSlide === 0}
              inverse={inverse}
            />
          </div>
          <div
            className={classNames(
              styles.ViewerCarouselButton,
              styles.ViewerCarouselButtonNext
            )}
          >
            <PaginationButton
              direction="next"
              onClick={handleNext}
              disabled={activeSlide === slides.length - 1}
              inverse={inverse}
            />
          </div>
        </div>
      )}
    </div>
  )
}

ViewerCarousel.defaultProps = {
  slides: [],
  thumbnails: [],
  activeItem: {},
  onChange: () => {}
}

ViewerCarousel.propTypes = {
  activeItem: object, // TODO: shape
  history: oneOfType([
    bool,
    shape({
      replaceState: bool,
      key: string
    })
  ]),
  initialSlide: number,
  inverse: bool,
  onChange: func,
  showcase: bool,
  slides: array, // TODO: shape
  thumbnails: array, // TODO: shape
  watermark: node
}

export default ViewerCarousel
