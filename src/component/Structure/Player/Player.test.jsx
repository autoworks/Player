import validateRequiredProps from '@/lib/validate-required-props'
import Player from '.'

const requiredProps = () => ({
  items: [
    { type: 'photo', minimap: '', src: '' },
    { type: 'video', poster: '', src: '' }
  ]
})

describe('Component: Player', function () {
  validateRequiredProps(Player, requiredProps())
})
