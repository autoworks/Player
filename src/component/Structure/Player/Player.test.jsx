import validateRequiredProps from '@/lib/validate-required-props'
import Player from '.'

const requiredProps = () => ({ items: [{ type: 'photo' }, { type: 'video' }] })

describe('Component: Player', function () {
  validateRequiredProps(Player, requiredProps())
})
