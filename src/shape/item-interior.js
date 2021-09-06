import { arrayOf, shape, string } from 'prop-types'

import hotspotInterior from './hotspot-interior'

export default {
  alt: string,
  caption: string,
  hotspots: arrayOf(shape(hotspotInterior)),
  id: string,
  poster: string.isRequired,
  src: string.isRequired,
  thumbnail: string.isRequired,
  type: string.isRequired
}
