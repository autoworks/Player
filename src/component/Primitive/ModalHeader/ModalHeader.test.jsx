import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ModalHeader from '.'

const requiredProps = () => ({})

describe('Component: ModalHeader', () => {
  validateRequiredProps(ModalHeader, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(
      <ModalHeader {...requiredProps()} heading="Default content" />
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<ModalHeader {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
