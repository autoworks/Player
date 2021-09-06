import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import DebugResponsiveImage from '.'

const requiredProps = () => ({
  alt: 'Default a11y text',
  src: '/image-800.jpg',
  width: 900,
  height: 450
})

describe('Component: DebugResponsiveImage', function () {
  validateRequiredProps(DebugResponsiveImage, requiredProps())

  test('should output the expected markup with default props', function () {
    const { container } = render(<DebugResponsiveImage {...requiredProps()} />)
    expect(container.firstChild).toHaveAttribute(
      'src',
      'https://via.placeholder.com/900x450?color=d08d07'
    )
    expect(container.firstChild).toHaveAttribute('width', '900')
    expect(container.firstChild).toHaveAttribute('height', '450')
    expect(container.firstChild).not.toHaveAttribute('sizes')
    expect(container.firstChild).not.toHaveAttribute('srcSet')
  })

  test('should output attribute if `sizes` prop passed', function () {
    const { container } = render(
      <DebugResponsiveImage
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
      <DebugResponsiveImage
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
      'https://via.placeholder.com/400x200?color=6e5d88 400w, https://via.placeholder.com/800x400?color=f45121 800w'
    )
  })
})
