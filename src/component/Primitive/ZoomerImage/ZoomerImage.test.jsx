// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import ZoomerImage from '.'

const requiredProps = () => ({})

describe('Component: ZoomerImage', () => {
  validateRequiredProps(ZoomerImage, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<ZoomerImage {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
