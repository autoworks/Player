// import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import Header from '.'

const requiredProps = () => ({})

describe('Component: Header', function () {
  validateRequiredProps(Header, requiredProps())
})
