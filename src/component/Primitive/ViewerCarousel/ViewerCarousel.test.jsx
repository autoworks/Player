// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import ViewerCarousel from '.'

const requiredProps = () => ({})

describe('Component: ViewerCarousel', () => {
  validateRequiredProps(ViewerCarousel, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<ViewerCarousel {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
