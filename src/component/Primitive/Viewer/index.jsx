import React from 'react'
import classNames from 'classnames'
import {
  shape,
  array,
  bool,
  func,
  node,
  number,
  object,
  string
} from 'prop-types'

import styles from './Viewer.module.scss'

import FilmStripFrame from '@/component/Primitive/FilmstripFrame'
import Interior from '@/component/Primitive/Interior'
import Rotator from '@/component/Primitive/Rotator'
import VideoPlayer from '@/component/Primitive/VideoPlayer'
import ViewerCarousel from '@/component/Primitive/ViewerCarousel'
import ViewerHeader from '@/component/Primitive/ViewerHeader'
import Zoomer from '@/component/Primitive/Zoomer'
import Icon from '@/component/Primitive/Icon'

const Viewer = ({
  activeItem,
  availableTypes,
  disableImageZoom,
  history,
  hideThumbnails,
  inverse,
  items,
  onExteriorRotate,
  onHotspotClick,
  onNavChange,
  onVideoProgress,
  onViewerChange,
  onZoom,
  rotatorScroll,
  ratio,
  showcase,
  thumbnailRatio,
  topNav,
  interiorMouseZoom,
  watermark
}) => {
  const slides = items.map((item, i) => {
    const key = `ViewerSlide:${i}`

    // Signal the active item, plus the items either side, to load as priority
    const priorityLoading =
      activeItem.index >= i - 1 && activeItem.index <= i + 1

    // DEBUG VARIABLES
    // const priorityLoading = false
    // if (item.type === 'interior') return <div />
    // if (item.type === 'exterior') return <div />
    // if (item.type === 'video') return <div />
    // if (item.type === 'photo') return <div />

    if (item.type === 'exterior')
      return (
        <Rotator
          key={key}
          {...item}
          priorityLoading={priorityLoading}
          inverse={inverse}
          ratio={ratio}
          scroll={rotatorScroll}
          onHotspotClick={onHotspotClick}
          onRotate={onExteriorRotate}
          inactive={activeItem.type !== 'exterior'}
        />
      )
    if (item.type === 'interior')
      return (
        <Interior
          key={key}
          {...item}
          priorityLoading={priorityLoading}
          inverse={inverse}
          ratio={ratio}
          controls={showcase}
          onHotspotClick={onHotspotClick}
          inactive={activeItem.type !== 'interior'}
          mouseZoom={interiorMouseZoom}
        />
      )
    if (item.type === 'video')
      return (
        <VideoPlayer
          key={key}
          {...item}
          inverse
          onProgress={(e) => {
            onVideoProgress &&
              onVideoProgress({
                progress: e.target.currentTime,
                index: i,
                id: item.id
              })
          }}
          ratio={ratio}
          disabled={activeItem.type !== 'video'}
        />
      )
    if (item.type === 'photo') {
      return (
        <Zoomer
          key={key}
          {...item}
          priorityLoading={priorityLoading}
          ratio={ratio}
          controls={showcase}
          onHotspotClick={onHotspotClick}
          disableZoom={disableImageZoom}
        />
      )
    }
  })

  const icons = {
    exterior: 'rotate-camera',
    interior: 'rotate-camera',
    video: 'video'
  }

  const captions = {
    exterior: '360º Exterior',
    interior: '360º Interior',
    video: 'Video'
  }

  let thumbnails = items.map((item, i) => {
    const key = `ViewerThumbnail:${i}`
    const hasHotspots =
      !!item.hotspots?.length ||
      !!item.images?.find((image) => image.hotspots?.length)

    return (
      <FilmStripFrame
        key={key}
        src={item.thumbnail}
        icon={icons[item.type] || null}
        caption={item.caption || captions[item.type]}
        inverse={inverse}
        hotspot={hasHotspots}
        ratio={thumbnailRatio}
      />
    )
  })

  if (hideThumbnails) thumbnails = []

  return (
    <div className={styles.Viewer}>
      <ViewerCarousel
        slides={slides}
        thumbnails={thumbnails}
        inverse={inverse}
        activeItem={activeItem}
        onChange={onViewerChange}
        watermark={watermark}
        showcase={showcase}
        history={history}
        disableImageZoom
      />
      {!showcase && (
        <ViewerHeader
          availableTypes={availableTypes}
          activeType={activeItem.type}
          onChange={onNavChange}
          onZoom={onZoom}
          topNav={topNav}
        />
      )}
      <div
        className={classNames(
          styles.ViewerTouchIcon,
          showcase && styles.alignRight,
          ['exterior', 'interior'].includes(activeItem.type) && styles.visible
        )}
      >
        <Icon type="touch" a11yText="" height={38} />
      </div>
    </div>
  )
}

Viewer.defaultProps = {
  items: [],
  activeItem: {},
  ratio: 10 / 16,
  thumbnailRatio: 1 / 2
}

Viewer.propTypes = {
  activeItem: object,
  availableTypes: array,
  disableImageZoom: bool,
  hideThumbnails: bool,
  history: object,
  inverse: bool,
  items: array,
  onExteriorRotate: func,
  onHotspotClick: func,
  onNavChange: func,
  onVideoProgress: func,
  onViewerChange: func,
  onZoom: func,
  ratio: number,
  rotatorScroll: bool,
  showcase: bool,
  thumbnailRatio: number,
  topNav: shape({
    interiorCaption: string,
    exteriorCaption: string,
    videoCaption: string,
    photoCaption: string
  }),
  interiorMouseZoom: bool,
  watermark: node
}

export default Viewer
