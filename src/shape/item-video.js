import { number, string } from 'prop-types'

export default {
  alt: string,
  aspectRatio: number,
  caption: string,
  id: string,
  poster: string.isRequired,
  src: string.isRequired,
  thumbnail: string.isRequired,
  type: string.isRequired
}
