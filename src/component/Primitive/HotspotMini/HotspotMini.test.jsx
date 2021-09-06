// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import HotspotMini from '.'

const requiredProps = () => ({})

describe('Component: HotspotMini', () => {
  validateRequiredProps(HotspotMini, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<HotspotMini {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
