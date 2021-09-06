import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ShrinkWrapItem from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: ShrinkWrapItem', function () {
  validateRequiredProps(ShrinkWrapItem, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<ShrinkWrapItem {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `noWrap` prop passed', function () {
    const { container } = render(<ShrinkWrapItem {...requiredProps()} noWrap />)
    expect(container.firstChild).toHaveClass('noWrap')
  })

  test('should output additional className when `shrink` prop passed', function () {
    const { container } = render(<ShrinkWrapItem {...requiredProps()} shrink />)
    expect(container.firstChild).toHaveClass('shrink')
  })

  test('should output additional className when `spacing` prop passed', function () {
    const { container } = render(
      <ShrinkWrapItem {...requiredProps()} spacing="comfortable" />
    )
    expect(container.firstChild).toHaveClass('comfortable')
  })

  test('should output additional className when `vAlign` prop passed', function () {
    const { container } = render(
      <ShrinkWrapItem {...requiredProps()} vAlign="top" />
    )
    expect(container.firstChild).toHaveClass('top')
  })
})
