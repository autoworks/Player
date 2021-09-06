// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Splash from '.'

const requiredProps = () => ({})

describe('Component: Splash', () => {
  validateRequiredProps(Splash, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Splash {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
