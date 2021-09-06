import validateRequiredProps from '@/lib/validate-required-props'
import LoadingProgress from '.'

const requiredProps = () => ({})

describe('Component: LoadingProgress', () => {
  validateRequiredProps(LoadingProgress, requiredProps())
})
