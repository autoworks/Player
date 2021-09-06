import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import PaginationButton from '.'

const requiredProps = () => ({ direction: 'next' })

describe('Component: PaginationButton', () => {
  validateRequiredProps(PaginationButton, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByLabelText } = render(<PaginationButton {...requiredProps()} />)
    expect(getByLabelText('Next slide')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<PaginationButton {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
