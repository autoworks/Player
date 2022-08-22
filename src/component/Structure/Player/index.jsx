import React, { useEffect, useState } from 'react'
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string,
  objectOf
} from 'prop-types'
import classNames from 'classnames'
import minifyCssString from '@/lib/css-string-minifier'
import { HotspotDebugContextProvider } from '@/component/Context/HotspotDebugContext'

import styles from './Player.module.scss'

import Header from '../Header'
import Icon from '@/component/Primitive/Icon'
import InfoPanel from '../InfoPanel'
import Modal from '@/component/Primitive/Modal'
import ModalHeader from '@/component/Primitive/ModalHeader'
import Spinner from '@/component/Primitive/Spinner'
import Splash from '@/component/Primitive/Splash'
import Viewer from '@/component/Primitive/Viewer'
import ViewerPlaceholder from '@/component/Primitive/ViewerPlaceholder'
import shapeHotspotStandard from '@/shape/hotspot-standard'
import shapeHotspotInterior from '@/shape/hotspot-interior'

const Player = ({
  colors,
  containerClass,
  forceShowcase,
  hideBranding,
  hideThumbnails,
  history,
  hotspotDebug,
  initialIndex,
  infoChildren,
  infoHeading,
  infoHeadingSecondary,
  infoHidden,
  infoOnLeft,
  infoTags,
  infoText,
  infoTextSecondary,
  infoHeightMatch,
  items,
  modalZIndex,
  onNavigation,
  onShowcaseEnter,
  onShowcaseExit,
  onVideoProgress,
  ratio,
  showcaseDescription,
  showcaseHeading,
  splashDuration,
  thumbnailRatio,
  watermark
}) => {
  const [showcaseActive, toggleShowcaseActive] = useState(!!forceShowcase)
  const [activeItem, updateActiveItem] = useState({})
  const [availableTypes, setAvailableTypes] = useState([])
  const [splashComplete, setSplashComplete] = useState(false)
  const [mounted, setMounted] = useState(false)

  const showInfo = infoHidden
    ? false
    : infoChildren ||
      infoHeading ||
      infoText ||
      infoTags ||
      infoHeadingSecondary ||
      infoTextSecondary

  const handleModalClose = () => {
    if (forceShowcase) {
      return
    }
    toggleShowcaseActive(false)
    onShowcaseExit && onShowcaseExit()
  }

  const handleModalOpen = () => {
    if (forceShowcase) {
      return
    }
    toggleShowcaseActive(true)
    onShowcaseEnter && onShowcaseEnter()
  }

  const handleNavChange = (type) => {
    const index = items.findIndex((item) => item.type === type)
    handleUpdateActiveItem(index)
  }

  const handleViewerChange = (index) => {
    handleUpdateActiveItem(index)
  }

  const handleHotspotClick = (hotspotId) => {
    const index = items.findIndex((item) => item.id === hotspotId)
    index >= 0 && handleUpdateActiveItem(index)
  }

  const handleUpdateActiveItem = (index) => {
    if (!(index >= 0)) return
    const activeItemData = {
      index,
      id: items[index].id,
      type: items[index].type
    }
    onNavigation && onNavigation(activeItemData)
    updateActiveItem(activeItemData)
  }

  const handleSetAvailableTypes = (items) => {
    if (!items.length) return
    const types = items.map((item) => item.type)
    setAvailableTypes([...new Set(types)])
  }

  const handleSplashComplete = () => {
    setSplashComplete(true)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    toggleShowcaseActive(!!forceShowcase)
  }, [forceShowcase])

  useEffect(() => {
    if (items.length && initialIndex < items.length) {
      handleSetAvailableTypes(items)
      handleNavChange(items[initialIndex].type)
    }
  }, [items, initialIndex])

  useEffect(() => {
    if (items.length) {
      handleUpdateActiveItem(initialIndex)
    }
  }, [initialIndex])

  const defaultColors = { accent: '#19c784', accentText: '#fff' }
  const mergedColors = { ...defaultColors, ...colors }
  const commonViewerProps = {
    history,
    items,
    activeItem,
    ratio,
    thumbnailRatio,
    hideThumbnails,
    onNavChange: handleNavChange,
    onViewerChange: handleViewerChange,
    onHotspotClick: handleHotspotClick,
    onVideoProgress: onVideoProgress
  }
  return (
    <HotspotDebugContextProvider active={hotspotDebug}>
      <div
        className={classNames(
          styles.Player,
          infoOnLeft && styles.infoOnLeft,
          infoHidden && styles.infoHidden,
          containerClass
        )}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: minifyCssString(`
            .${styles.PlayerContent} {
              --color-accent: ${mergedColors.accent};
              --color-accent-text: ${mergedColors.accentText};
            }
          `)
          }}
        />
        {splashDuration > 0 && !splashComplete && (
          <Splash duration={splashDuration} onComplete={handleSplashComplete} />
        )}

        {!hideBranding && (
          <div className={styles.PlayerHeader}>
            <Header />
          </div>
        )}
        <div className={styles.PlayerContent}>
          <div className={styles.PlayerViewer}>
            {(!mounted || showcaseActive || items.length === 0) && (
              <ViewerPlaceholder hideThumbnails={hideThumbnails}>
                <div style={{ textAlign: 'center' }}>
                  {!mounted && <Spinner />}
                  <noscript>
                    <div>
                      This functionality requires JavaScript to be enabled
                    </div>
                  </noscript>
                </div>
              </ViewerPlaceholder>
            )}
            {mounted && !showcaseActive && (
              <Viewer
                {...commonViewerProps}
                availableTypes={availableTypes}
                onZoom={handleModalOpen}
                disableImageZoom
                interiorMouseZoom={false}
              />
            )}
          </div>
          {showInfo && (
            <div className={styles.PlayerInfo}>
              <div
                className={classNames(
                  styles.PlayerInfoInner,
                  infoHeightMatch && styles.heightMatch
                )}
              >
                <InfoPanel
                  heading={infoHeading}
                  text={infoText}
                  tags={infoTags}
                  headingSecondary={infoHeadingSecondary}
                  textSecondary={infoTextSecondary}
                >
                  {(typeof infoChildren === 'string' && (
                    <div dangerouslySetInnerHTML={{ __html: infoChildren }} />
                  )) ||
                    infoChildren}
                </InfoPanel>
              </div>
            </div>
          )}
        </div>
        <Modal
          open={showcaseActive}
          ariaLabel="Showcase mode"
          onClose={handleModalClose}
          watermark={
            watermark && (
              <Icon type="autoloadit" a11yText="AutoLoadIt" width={150} />
            )
          }
          colors={mergedColors}
          zIndex={modalZIndex}
          animated={!forceShowcase}
        >
          <ModalHeader
            availableTypes={availableTypes}
            activeType={activeItem.type}
            onChange={handleNavChange}
            heading={showcaseHeading}
            description={showcaseDescription}
            onClose={!forceShowcase ? handleModalClose : undefined}
            inverse
          />
          {mounted && showcaseActive && (
            <Viewer
              {...commonViewerProps}
              showcase
              inverse
              rotatorScroll
              interiorMouseZoom
              watermark={
                watermark && (
                  <Icon type="autoloadit" a11yText="AutoLoadIt" width={150} />
                )
              }
            />
          )}

          {forceShowcase && (!mounted || items.length === 0) && (
            <ViewerPlaceholder inverse hideThumbnails={hideThumbnails}>
              <div style={{ textAlign: 'center' }}>
                {!mounted && <Spinner />}
                <noscript>
                  <div>
                    This functionality requires JavaScript to be enabled
                  </div>
                </noscript>
              </div>
            </ViewerPlaceholder>
          )}
        </Modal>
      </div>
    </HotspotDebugContextProvider>
  )
}

Player.defaultProps = {
  colors: {},
  containerClass: null,
  initialIndex: 0,
  items: [],
  splashDuration: 0,
  watermark: true
}

Player.propTypes = {
  colors: shape({
    accent: string,
    accentText: string
  }),
  containerClass: string,
  hideBranding: bool,
  hideThumbnails: bool,
  history: object,
  hotspotDebug: bool,
  initialIndex: number,
  infoChildren: node,
  infoHeading: string,
  infoHeadingSecondary: string,
  infoHidden: bool,
  infoOnLeft: bool,
  infoTags: arrayOf(string),
  infoText: string,
  infoTextSecondary: string,
  infoHeightMatch: bool,
  onNavigation: func,
  onShowcaseEnter: func,
  onShowcaseExit: func,
  onVideoProgress: func,
  ratio: number,
  showcaseDescription: string,
  showcaseHeading: string,
  splashDuration: number,
  styles: string,
  thumbnailRatio: number,
  watermark: bool,
  items: arrayOf(
    oneOfType([
      shape({
        type: oneOf(['photo']),
        id: string,
        thumbnail: string,
        hasHotspot: bool,
        alt: string,
        caption: string,
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
      }),
      shape({
        type: oneOf(['exterior']),
        id: string,
        thumbnail: string,
        caption: string,
        hasHotspot: bool,
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
        ratio: number,
        reverseDirection: bool,
        scroll: bool
      }),
      shape({
        type: oneOf(['interior']),
        id: string,
        thumbnail: string,
        caption: string,
        hasHotspot: bool,
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
      }),
      shape({
        type: oneOf(['video']),
        id: string,
        thumbnail: string,
        caption: string,
        hasHotspot: bool,
        alt: string,
        aspectRatio: number,
        autoplay: bool,
        disabled: bool,
        inverse: bool,
        onProgress: func,
        poster: string.isRequired,
        ratio: number,
        src: string.isRequired
      })
    ])
  ).isRequired,
  modalZIndex: number,
  forceShowcase: bool
}

export default Player
