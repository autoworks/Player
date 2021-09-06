// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import InteriorPanorama from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: InteriorPanorama', () => {
  validateRequiredProps(InteriorPanorama, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<InteriorPanorama {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
