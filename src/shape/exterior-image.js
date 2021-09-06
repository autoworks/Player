import { arrayOf, objectOf, string } from 'prop-types'

import hotspot from './hotspot'

export default {
  src: string,
  srcSet: objectOf(string),
  hotspots: arrayOf(hotspot)
}
