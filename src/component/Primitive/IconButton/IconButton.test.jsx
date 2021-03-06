import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import IconButton from './'

const requiredProps = () => ({
  a11yText: 'Example text',
  icon: '_placeholder'
})

describe('Component: IconButton', function () {
  validateRequiredProps(IconButton, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByRole } = render(<IconButton {...requiredProps()} />)
    expect(getByRole('button')).toBeTruthy()
  })

  test('should output additional styles when `rounded` prop passed', function () {
    const { container } = render(<IconButton {...requiredProps()} rounded />)
    expect(container.firstChild).toHaveClass('rounded')
  })

  test('should output additional styles when `small` prop passed', function () {
    const { container } = render(<IconButton {...requiredProps()} small />)
    expect(container.firstChild).toHaveClass('small')
  })

  test('should output additional styles when `solid` prop passed', function () {
    const { container } = render(<IconButton {...requiredProps()} solid />)
    expect(container.firstChild).toHaveClass('solid')
  })

  test('should output additional styles when `increaseHitArea` prop passed', function () {
    const { container } = render(
      <IconButton {...requiredProps()} increaseHitArea />
    )
    expect(container.firstChild).toHaveClass('increaseHitArea')
  })

  test('should output additional content when `children` prop passed', function () {
    const { getByText } = render(
      <IconButton {...requiredProps()}>Example</IconButton>
    )
    expect(getByText('Example')).toBeTruthy()
  })
})
