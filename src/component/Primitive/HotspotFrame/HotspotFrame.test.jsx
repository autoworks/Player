// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import HotspotFrame from '.'

const requiredProps = () => ({})

describe('Component: HotspotFrame', () => {
  validateRequiredProps(HotspotFrame, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<HotspotFrame {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
