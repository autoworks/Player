import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import ResponsiveImage from '.'

const requiredProps = () => ({
  alt: 'Default a11y text',
  src: '/image-800.jpg',
  width: 900,
  height: 450
})

describe('Component: ResponsiveImage', function () {
  validateRequiredProps(ResponsiveImage, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container, getByAltText } = render(
      <ResponsiveImage {...requiredProps()} />
    )
    expect(getByAltText('Default a11y text')).toBeTruthy()
    expect(container.firstChild).toHaveAttribute('src', '/image-800.jpg')
    expect(container.firstChild).toHaveAttribute('width', '900')
    expect(container.firstChild).toHaveAttribute('height', '450')
    expect(container.firstChild).not.toHaveAttribute('sizes')
    expect(container.firstChild).not.toHaveAttribute('srcSet')
  })

  test('should still output `alt` if empty string passed', function () {
    const { getByAltText } = render(
      <ResponsiveImage {...requiredProps()} alt="" />
    )
    expect(getByAltText('')).toBeTruthy()
  })

  test('should output attribute if `sizes` prop passed', function () {
    const { container } = render(
      <ResponsiveImage
        {...requiredProps()}
        sizes={['(min-width: 200px) 50vw', '100vw']}
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'sizes',
      '(min-width: 200px) 50vw,100vw'
    )
  })

  test('should output attribute if `srcSet` prop passed', function () {
    const { container } = render(
      <ResponsiveImage
        {...requiredProps()}
        srcSet={[
          {
            width: 400,
            src: '/image-400.jpg'
          },
          {
            width: 800,
            src: '/image-800.jpg'
          }
        ]}
      />
    )
    expect(container.firstChild).toHaveAttribute(
      'srcSet',
      '/image-400.jpg 400w, /image-800.jpg 800w'
    )
  })
})
