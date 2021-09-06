import React from 'react'
import { storiesOf } from '@storybook/react'

import Video from '.'
import captionsFile from './fixture/captions.vtt'

const stories = storiesOf('Unsorted/Video', module)

stories.add(
  'Info',
  () => (
    <Video
      controls
      poster="https://via.placeholder.com/640x360"
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    />
  ),
  {
    info: {
      inline: true,
      text: `
        A standard HTML5 video element, added as a component to leverage prop
        typechecking and a11y tools
      `
    }
  }
)

stories.add('Default state', () => (
  <Video
    controls
    poster="https://via.placeholder.com/640x360"
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  />
))

stories.add('Muted autoplay', () => (
  <Video
    muted
    autoPlay
    poster="https://via.placeholder.com/640x360"
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  />
))

stories.add('Captions (visible by default)', () => (
  <Video
    controls
    poster="https://via.placeholder.com/640x360"
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  >
    <track default kind="captions" srcLang="en" src={captionsFile} />
  </Video>
))

stories.add('Captions (optional)', () => (
  <Video
    controls
    poster="https://via.placeholder.com/640x360"
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  >
    <track kind="captions" srcLang="en" src={captionsFile} />
  </Video>
))
