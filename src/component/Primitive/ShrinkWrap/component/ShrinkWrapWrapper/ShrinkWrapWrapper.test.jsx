import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ShrinkWrapWrapper from '.'
import ShrinkWrap from '../..'

const requiredProps = () => ({
  children: <ShrinkWrap.Item>Default content</ShrinkWrap.Item>
})

describe('Component: ShrinkWrapWrapper', function () {
  validateRequiredProps(ShrinkWrapWrapper, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(<ShrinkWrapWrapper {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output additional className when `fixed` prop passed', function () {
    const { container } = render(
      <ShrinkWrapWrapper {...requiredProps()} fixed />
    )
    expect(container.firstChild).toHaveClass('fixed')
  })

  test('should output additional className when `fullWidth` prop passed', function () {
    const { container } = render(
      <ShrinkWrapWrapper {...requiredProps()} fullWidth />
    )
    expect(container.firstChild).toHaveClass('fullWidth')
  })

  test('should output additional className when `mobileStack` prop passed', function () {
    const { container } = render(
      <ShrinkWrapWrapper {...requiredProps()} mobileStack />
    )
    expect(container.firstChild).toHaveClass('mobileStack')
  })
})
