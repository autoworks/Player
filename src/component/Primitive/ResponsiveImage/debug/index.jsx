import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import stringToColor from '../../../../lib/string-to-color'

import ResponsiveImage from '../'

const debugPath = 'https://via.placeholder.com/'

const buildDebugSrc = ({ width, height }) => {
  const debugColor = `${stringToColor(`${width}x${height}`).replace('#', '')}`
  return `${debugPath}${width}x${height}?color=${debugColor}`
}

const buildDebugSrcSet = ({ srcSet, ratio }) =>
  srcSet.map((image) => ({
    width: image.width,
    src: buildDebugSrc({ width: image.width, height: image.width * ratio })
  }))

const ResponsiveDebugImage = ({ src, srcSet, height, width, ...other }) => (
  <ResponsiveImage
    src={buildDebugSrc({ width, height })}
    srcSet={srcSet && buildDebugSrcSet({ srcSet, ratio: height / width })}
    height={height}
    width={width}
    {...other}
  />
)

ResponsiveDebugImage.propTypes = {
  alt: string.isRequired,
  height: number.isRequired,
  src: string.isRequired,
  srcSet: arrayOf(shape({ width: number.isRequired, src: string.isRequired })),
  width: number.isRequired
}

export default ResponsiveDebugImage
