// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import VideoPlayer from '.'

const requiredProps = () => ({})

describe('Component: VideoPlayer', () => {
  validateRequiredProps(VideoPlayer, requiredProps())

  // test('should output the expected markup with default props', () => {
  //   const { getByText } = render(<VideoPlayer {...requiredProps()} />)
  //   expect(getByText('Default content')).toBeTruthy()
  // })
})
