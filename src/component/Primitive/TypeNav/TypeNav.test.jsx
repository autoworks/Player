import validateRequiredProps from '@/lib/validate-required-props'
import TypeNav from '.'

const requiredProps = () => ({})

describe('Component: TypeNav', () => {
  validateRequiredProps(TypeNav, requiredProps())
})
