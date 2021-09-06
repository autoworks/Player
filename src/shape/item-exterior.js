import { arrayOf, bool, number, objectOf, shape, string } from 'prop-types'

import hotspotStandard from './hotspot-standard'

export default {
  alt: string,
  caption: string,
  id: string,
  images: arrayOf(
    shape({
      src: string.isRequired,
      srcSet: objectOf(string),
      hotspots: arrayOf(shape(hotspotStandard))
    })
  ),
  initialIndex: number,
  reverseDirection: bool,
  thumbnail: string.isRequired,
  type: string.isRequired
}
