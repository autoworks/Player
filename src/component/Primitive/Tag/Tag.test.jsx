import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Tag from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Tag', () => {
  validateRequiredProps(Tag, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Tag {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
