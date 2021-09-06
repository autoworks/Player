// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import ViewerPlaceholder from '.'

const requiredProps = () => ({})

describe('Component: ViewerPlaceholder', () => {
  validateRequiredProps(ViewerPlaceholder, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<ViewerPlaceholder {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
