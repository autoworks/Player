// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import Video from '.'

const requiredProps = () => ({})

describe('Component: Video', () => {
  validateRequiredProps(Video, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByRole } = render(<Video {...requiredProps()} />)
  //   expect(getByRole('video')).toBeTruthy()
  // })
})
