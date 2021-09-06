// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import InfoPanel from '.'

const requiredProps = () => ({})

describe('Component: InfoPanel', () => {
  validateRequiredProps(InfoPanel, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<InfoPanel {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
