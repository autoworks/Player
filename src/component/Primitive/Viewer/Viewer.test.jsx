// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Viewer from '.'

const requiredProps = () => ({})

describe('Component: Viewer', () => {
  validateRequiredProps(Viewer, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Viewer {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
