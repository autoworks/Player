import React, { useEffect, useRef, useState } from 'react'
import { bool, func, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './VideoPlayer.module.scss'
import isIos from './lib/detect-ios'
// import './lib/tiny-fullscreen-shim'

import IconButton from '../IconButton'
import MediaMute from '../MediaMute'
import MediaScrubber from '../MediaScrubber'
import MediaVolume from '../MediaVolume'
import ResponsiveMedia from '../ResponsiveMedia'
import ShrinkWrap from '../ShrinkWrap'
import Spinner from '../Spinner'
import Video from '../Video'
import VisuallyHidden from '../VisuallyHidden'

const VideoPlayer = ({
  alt,
  aspectRatio,
  autoplay,
  disabled,
  inverse,
  poster,
  ratio,
  src,
  onProgress
}) => {
  const [playing, togglePlaying] = useState(autoplay)
  const [volume, updateVolume] = useState(100)
  const [progress, updateProgress] = useState(0)
  const [duration, updateDuration] = useState(0)
  const [forceControls, toggleForceControls] = useState(false)
  const [fullscreen, toggleFullscreen] = useState(false)
  const [volumeMode, setVolumeMode] = useState()
  const [muted, toggleMuted] = useState(false)
  const [waiting, toggleWaiting] = useState(false)

  const playerRef = useRef(null)
  const videoRef = useRef(null)

  const handleMetaLoaded = (e) => {
    updateDuration(e.target.duration)
    toggleForceControls(true)
  }

  const handlePlay = () => {
    togglePlaying(true)
    toggleForceControls(false)
  }

  const handlePause = () => {
    togglePlaying(false)
    toggleForceControls(true)
  }

  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      handlePlay()
      videoRef.current.play()
    } else {
      handlePause()
      videoRef.current.pause()
    }
  }

  const handleDisabled = () => {
    togglePlaying(false)
    toggleForceControls(true)
    videoRef.current.pause()
  }

  const handleVolumeChange = (newVolume) => {
    const volumeInt = parseInt(newVolume, 10)
    updateVolume(volumeInt)
    videoRef.current.volume = volumeInt / 100
  }

  const handleTimeUpdate = (e) => {
    const timeInt = parseInt(e.target.currentTime, 10)
    updateProgress(timeInt)
    toggleWaiting(false)
    onProgress && onProgress(e)
  }

  const handleManualTimeUpdate = (e) => {
    const timeInt = parseInt(e.target.value, 10)
    updateProgress(timeInt)
    videoRef.current.currentTime = timeInt
  }

  const handleSetVolumeMode = () => {
    setVolumeMode(isIos() ? 'simple' : 'full')
  }

  const handleToggleMute = () => {
    if (videoRef.current.muted) {
      toggleMuted(false)
      videoRef.current.muted = false
    } else {
      toggleMuted(true)
      videoRef.current.muted = true
    }
  }

  const handleToggleFullscreen = (e) => {
    e.stopPropagation()
    if (fullscreen) {
      handleExitFullscreen()
    } else {
      handleEnterFullscreen()
    }
  }

  const handleEnterFullscreen = () => {
    toggleFullscreen(true)
    if (playerRef.current.requestFullscreen) {
      playerRef.current.requestFullscreen()
    } else {
      videoRef.current.webkitEnterFullscreen()
    }
  }

  const handleExitFullscreen = () => {
    toggleFullscreen(false)
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (videoRef.current.webkitDisplayingFullscreen) {
      videoRef.current.webkitExitFullscreen()
    }
  }

  const handleFullscreenChange = () => {
    if (document.fullscreenElement) {
      toggleFullscreen(true)
    } else {
      toggleFullscreen(false)
    }
  }

  const handleWaiting = () => {
    toggleWaiting(true)
  }

  useEffect(() => {
    const handleOrientationChange = () => {
      if (videoRef.current.paused) return
      if (window.orientation === -90 || window.orientation === 90) {
        handleEnterFullscreen()
      } else {
        handleExitFullscreen()
      }
    }
    window.addEventListener('orientationchange', handleOrientationChange)
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      window.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current

    video.addEventListener('loadedmetadata', handleMetaLoaded, { once: true })
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handlePause)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('waiting', handleWaiting)

    handleSetVolumeMode()

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handlePause)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('waiting', handleWaiting)
    }
  }, [])

  useEffect(() => {
    if (disabled) {
      handleDisabled()
    }
  }, [disabled])

  return (
    <div
      className={classNames(
        styles.VideoPlayer,
        forceControls && styles.forceControls,
        inverse && styles.inverse
      )}
      ref={playerRef}
    >
      {alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      <ResponsiveMedia ratio={ratio}>
        <div
          className={styles.VideoPlayerInner}
          style={{ maxWidth: `${(ratio / aspectRatio) * 100}%` }}
        >
          <ResponsiveMedia ratio={aspectRatio}>
            <div className={styles.VideoPlayerInnerInner}>
              <Video
                playsInline
                controls={false}
                setRef={videoRef}
                autoplay={autoplay}
                preload="metadata"
                poster={poster}
                src={src}
              />
              {waiting && (
                <div className={styles.VideoPlayerInnerOverlay}>
                  <Spinner />
                </div>
              )}
              <div className={styles.VideoPlayerControls}>
                <div className={styles.VideoPlayerControlsInner}>
                  <div
                    className={classNames(
                      styles.MediaControls,
                      inverse && styles.inverse
                    )}
                  >
                    <div className={styles.VideoPlayerScrubber}>
                      <MediaScrubber
                        inverse={inverse}
                        duration={duration}
                        progress={progress}
                        onChange={handleManualTimeUpdate}
                      />
                    </div>
                    <div>
                      <ShrinkWrap fullWidth>
                        <ShrinkWrap.Item spacing="comfortable">
                          <IconButton
                            icon={playing ? 'pause' : 'play'}
                            a11yText={playing ? 'Pause' : 'Play'}
                            onClick={handleTogglePlay}
                            small
                            increaseHitArea
                          />
                        </ShrinkWrap.Item>
                        <ShrinkWrap.Item
                          shrink
                          vAlign="middle"
                          spacing="comfortable"
                        >
                          <div className={styles.VideoPlayerVolume}>
                            {volumeMode === 'simple' && (
                              <MediaMute
                                onClick={handleToggleMute}
                                muted={muted}
                              />
                            )}
                            {volumeMode === 'full' && (
                              <MediaVolume
                                inverse={inverse}
                                volume={volume}
                                onChange={handleVolumeChange}
                              />
                            )}
                          </div>
                        </ShrinkWrap.Item>
                        <ShrinkWrap.Item
                          shrink
                          vAlign="middle"
                          spacing="comfortable"
                        >
                          <IconButton
                            icon={fullscreen ? 'fullscreen-exit' : 'fullscreen'}
                            a11yText={
                              fullscreen
                                ? 'Exit fullscreen'
                                : 'Enter fullscreen'
                            }
                            onClick={handleToggleFullscreen}
                            small
                            increaseHitArea
                          />
                        </ShrinkWrap.Item>
                      </ShrinkWrap>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveMedia>
        </div>
      </ResponsiveMedia>
    </div>
  )
}

VideoPlayer.defaultProps = {
  ratio: 10 / 16,
  aspectRatio: 9 / 16
}

VideoPlayer.propTypes = {
  alt: string,
  aspectRatio: number,
  autoplay: bool,
  disabled: bool,
  inverse: bool,
  onProgress: func,
  poster: string.isRequired,
  ratio: number,
  src: string.isRequired
}

export default VideoPlayer
