import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ButtonSingle from '.'

const requiredProps = () => ({
  a11yText: 'Default content',
  icon: '_placeholder'
})

describe('Component: ButtonSingle', () => {
  validateRequiredProps(ButtonSingle, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByLabelText } = render(<ButtonSingle {...requiredProps()} />)
    expect(getByLabelText('Default content')).toBeTruthy()
  })
})
