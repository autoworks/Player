// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Rule from '.'

const requiredProps = () => ({})

describe('Component: Rule', () => {
  validateRequiredProps(Rule, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<Rule {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
