import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import SiteContainer from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: SiteContainer', () => {
  validateRequiredProps(SiteContainer, requiredProps())

  test('should output the expected markup with default props', () => {
    const { getByText } = render(<SiteContainer {...requiredProps()} />)
    expect(getByText('Default content')).toBeTruthy()
  })
})
