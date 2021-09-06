// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import ViewerHeader from '.'

const requiredProps = () => ({})

describe('Component: ViewerHeader', () => {
  validateRequiredProps(ViewerHeader, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<ViewerHeader {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
