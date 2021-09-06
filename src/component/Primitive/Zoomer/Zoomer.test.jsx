import validateRequiredProps from '@/lib/validate-required-props'
import Zoomer from '.'

const requiredProps = () => ({})

describe('Component: Zoomer', function () {
  validateRequiredProps(Zoomer, requiredProps())
})
