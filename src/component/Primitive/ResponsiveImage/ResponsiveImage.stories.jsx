import React from 'react'
import { storiesOf } from '@storybook/react'

import ResponsiveImage from '.'
import ResponsiveDebugImage from './debug'

const stories = storiesOf('Utility/ResponsiveImage', module)

stories.add(
  'Info',
  () => (
    <div style={{ width: '80%', margin: 'auto' }}>
      <ResponsiveImage
        alt=""
        srcSet={[
          {
            width: 400,
            src: 'https://picsum.photos/400/225.jpg'
          },
          {
            width: 1600,
            src: 'https://picsum.photos/1600/900.jpg'
          }
        ]}
        sizes={['(min-width: 800px) 50vw', '(min-width: 320px) 80vw', '100vw']}
        src="https://picsum.photos/800/450.jpg"
        width={800}
        height={450}
      />
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
        Responsive image component which allows the browser to display one of
        the supplied images that it thinks best fills the space.

        \`src\`: the fallback image for browsers which don’t have responsive
        image support.

        \`srcSet\`: contains a list of available images, listed with the
        natural width of that image file (in pixels).

        \`sizes\`: explains to the browser how large the image will appear on
        screen at various breakpoints, using a mix of media queries along with
        the approximate size of the image when that media query is active. The
        first matching query is used, so ordering of queries is important.
        Should contain a fallback width as the last value in case none of the
        media queries match.
      `
    }
  }
)

stories.add('Default state', () => (
  <ResponsiveImage
    alt=""
    srcSet={[
      {
        width: 400,
        src: 'https://picsum.photos/400/225.jpg'
      },
      {
        width: 800,
        src: 'https://picsum.photos/800/450.jpg'
      },
      {
        width: 1280,
        src: 'https://picsum.photos/1280/720.jpg'
      },
      {
        width: 1600,
        src: 'https://picsum.photos/1600/900.jpg'
      }
    ]}
    sizes={['100vw']}
    src="https://picsum.photos/800/450.jpg"
    width={800}
    height={450}
  />
))

stories.add('With debug images', () => (
  <ResponsiveDebugImage
    alt=""
    srcSet={[
      {
        width: 400,
        src: 'https://picsum.photos/400/225.jpg'
      },
      {
        width: 600,
        src: 'https://picsum.photos/600/338.jpg'
      },
      {
        width: 800,
        src: 'https://picsum.photos/800/450.jpg'
      },
      {
        width: 1000,
        src: 'https://picsum.photos/1000/562.jpg'
      },
      {
        width: 1280,
        src: 'https://picsum.photos/1280/720.jpg'
      },
      {
        width: 1600,
        src: 'https://picsum.photos/1600/900.jpg'
      }
    ]}
    sizes={['100vw']}
    src="https://picsum.photos/800/450.jpg"
    width={800}
    height={450}
  />
))

stories.add('Single Image state', () => (
  <ResponsiveImage
    alt=""
    src="https://picsum.photos/800/450.jpg"
    width={800}
    height={450}
  />
))

stories.add('Single Image state (debug)', () => (
  <ResponsiveDebugImage
    alt=""
    src="https://picsum.photos/800/450.jpg"
    width={800}
    height={450}
  />
))
