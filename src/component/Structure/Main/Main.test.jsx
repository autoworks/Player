import validateRequiredProps from '@/lib/validate-required-props'
import Main from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Main', function () {
  validateRequiredProps(Main, requiredProps())
})
