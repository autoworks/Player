// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import FilmstripFrame from '.'

const requiredProps = () => ({ src: '/image.jpg' })

describe('Component: FilmstripFrame', () => {
  validateRequiredProps(FilmstripFrame, requiredProps())

  // test('should output additional className when `foo` prop passed', () => {
  //   const { } = render(<FilmstripFrame {...requiredProps()} foo />)
  //   expect().toEqual()
  // })
})
