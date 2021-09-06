import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import TagList from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: TagList', () => {
  validateRequiredProps(TagList, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<TagList {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
