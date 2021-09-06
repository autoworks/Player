import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import Modal from '.'

const requiredProps = () => ({
  ariaLabel: 'Example Label',
  children: 'Example content'
})

describe('Component: Modal', () => {
  validateRequiredProps(Modal, requiredProps())

  test('should output nothing without `open` prop', () => {
    const { queryByRole, queryByText } = render(<Modal {...requiredProps()} />)
    expect(queryByRole('dialog')).toBeNull()
    expect(queryByText('Default content')).toBeNull()
  })

  // test('should output the expected markup with default props', () => {
  //   const { getByRole, getByText } = render(<Modal {...requiredProps()} open />)
  //   expect(getByRole('dialog')).toBeTruthy()
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
