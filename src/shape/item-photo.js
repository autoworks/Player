import { arrayOf, objectOf, shape, string } from 'prop-types'

import hotspotStandard from './hotspot-standard'

export default {
  alt: string,
  caption: string,
  hotspots: arrayOf(shape(hotspotStandard)),
  id: string,
  minimap: string.isRequired,
  src: string.isRequired,
  srcSet: objectOf(string),
  thumbnail: string.isRequired,
  type: string.isRequired
}
