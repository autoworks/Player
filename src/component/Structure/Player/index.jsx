import React, { useEffect, useState } from 'react'
import {
  arrayOf,
  bool,
  func,
  node,
  number,
  object,
  oneOf,
  shape,
  string
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

const Player = ({
  colors,
  containerClass,
  hideBranding,
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
  const [showcaseActive, toggleShowcaseActive] = useState(false)
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
    toggleShowcaseActive(false)
    onShowcaseExit && onShowcaseExit()
  }

  const handleModalOpen = () => {
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
              <ViewerPlaceholder>
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
              <div className={styles.PlayerInfoInner}>
                <InfoPanel
                  heading={infoHeading}
                  text={infoText}
                  tags={infoTags}
                  headingSecondary={infoHeadingSecondary}
                  textSecondary={infoTextSecondary}
                >
                  {infoChildren}
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
        >
          <ModalHeader
            availableTypes={availableTypes}
            activeType={activeItem.type}
            onChange={handleNavChange}
            heading={showcaseHeading}
            description={showcaseDescription}
            onClose={handleModalClose}
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
    shape({ type: oneOf(['exterior', 'interior', 'photo', 'video']) })
  ).isRequired,
  modalZIndex: number
}

export default Player
