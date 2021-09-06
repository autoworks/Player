// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Minimap from '.'

const requiredProps = () => ({ src: 'image.jpg' })

describe('Component: Minimap', () => {
  validateRequiredProps(Minimap, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Minimap {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
