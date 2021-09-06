// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
// import { render } from '@testing-library/react'
import ImageFrame from '.'

const requiredProps = () => ({})

describe('Component: ImageFrame', () => {
  validateRequiredProps(ImageFrame, requiredProps())
})
