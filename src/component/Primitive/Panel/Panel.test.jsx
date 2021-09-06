import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Panel from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: Panel', () => {
  validateRequiredProps(Panel, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<Panel {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<Panel {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
