import { bool, number, string } from 'prop-types'

export default {
  id: string,
  tooltip: string,
  autoFocus: bool,
  hfov: number,
  pitch: number.isRequired,
  yaw: number.isRequired
}
