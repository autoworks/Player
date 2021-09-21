import React from 'react'
import Player from '.'

import config from '@/fixture/config'
import items from '@/fixture/items'
import items3x2 from '@/fixture/3x2/items'

export default {
  title: 'Unsorted/Player',
  component: Player,
  argTypes: {
    watermark: { control: { type: null } },
    items: { control: { type: null } }
  }
}

const Template = (args) => <Player {...args} />

export const Default = Template.bind({})
Default.args = {
  items
}

export const Info = Template.bind({})
Info.args = {
  ...Default.args,
  infoHeading: config.infoHeading,
  infoText: config.infoText,
  infoTags: config.infoTags,
  infoHeadingSecondary: config.infoHeadingSecondary,
  infoTextSecondary: config.infoTextSecondary
}

export const InfoHeightMatching = Template.bind({})
InfoHeightMatching.args = {
  ...Info.args,
  infoHeightMatch: true
}

export const InfoOnLeft = Template.bind({})
InfoOnLeft.args = {
  ...Info.args,
  infoOnLeft: true
}

export const InfoHidden = Template.bind({})
InfoHidden.args = {
  ...Default.args,
  infoHidden: true
}

export const Color = Template.bind({})
Color.args = {
  ...Default.args,
  colors: config.colors
}

// export const CustomStyles = Template.bind({})
// CustomStyles.args = {
//   ...Default.args,
//   styles: config.styles
// }

export const CustomClasses = Template.bind({})
CustomClasses.decorators = [
  (Story) => (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .container {outline: 2px dotted #47a967;outline-offset: -1px;}
          `
        }}
      />
      <Story />
    </div>
  )
]
CustomClasses.args = {
  ...Default.args,
  containerClass: 'container'
}

export const CustomRatios = Template.bind({})
CustomRatios.args = {
  ...Default.args,
  items: items3x2,
  ratio: 2 / 3,
  thumbnailRatio: 2 / 3
}

export const HideBranding = Template.bind({})
HideBranding.args = {
  ...Default.args,
  hideBranding: true
}

export const Splash = Template.bind({})
Splash.args = {
  ...Default.args,
  splashDuration: 2000
}

export const NavChangeEvent = Template.bind({})
NavChangeEvent.args = {
  ...Default.args,
  onNavigation: config.onNavigation
}

export const VideoProgressEvent = Template.bind({})
VideoProgressEvent.args = {
  ...Default.args,
  onVideoProgress: config.onVideoProgress
}

export const History = Template.bind({})
History.args = {
  ...Default.args,
  history: { replaceState: false, key: 'item' }
}
