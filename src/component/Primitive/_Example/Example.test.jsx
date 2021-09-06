import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Example from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Example', () => {
  validateRequiredProps(Example, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Example {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
