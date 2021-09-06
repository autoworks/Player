// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Hotspot from '.'

const requiredProps = () => ({})

describe('Component: Hotspot', () => {
  validateRequiredProps(Hotspot, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Hotspot {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
