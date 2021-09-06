import React from 'react'
import {
  bool,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  string
} from 'prop-types'

const Video = ({
  autoPlay,
  buffered,
  children,
  className,
  controls,
  crossOrigin,
  height,
  loop,
  muted,
  playsInline,
  poster,
  preload,
  src,
  width,
  setRef
}) => (
  // TODO: implement caption functionality using <track> element
  // eslint-disable-next-line jsx-a11y/media-has-caption
  <video
    ref={setRef}
    autoPlay={autoPlay}
    buffered={buffered}
    className={className}
    controls={controls}
    crossOrigin={crossOrigin}
    height={height}
    loop={loop}
    muted={muted}
    playsInline={playsInline}
    poster={poster}
    preload={preload}
    src={src}
    width={width}
  >
    {!children && <p>Sorry, your device doesn’t support embedded videos</p>}
    {children}
  </video>
)

Video.propTypes = {
  autoPlay: bool,
  buffered: string,
  children: node,
  className: string,
  controls: bool,
  crossOrigin: oneOf(['anonymous', 'use-credentials']),
  height: number,
  loop: bool,
  muted: bool,
  playsInline: bool,
  poster: string,
  preload: oneOfType([bool, oneOf(['none', 'metadata', 'auto'])]),
  src: string,
  width: number,
  setRef: object
}
export default Video
