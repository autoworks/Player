import React from 'react'
import Player from '.'

import config from '@/fixture/config'
import items from '@/fixture/items'

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

export const InfoChildrenReact = Template.bind({})
InfoChildrenReact.args = {
  ...Default.args,
  infoHeading: config.infoHeading,
  infoText: config.infoText,
  infoTags: config.infoTags,
  infoHeadingSecondary: config.infoHeadingSecondary,
  infoTextSecondary: config.infoTextSecondary,
  infoChildren: <p>Lorem ipsum</p>
}

export const InfoChildrenHTML = Template.bind({})
InfoChildrenHTML.args = {
  ...Default.args,
  infoHeading: config.infoHeading,
  infoText: config.infoText,
  infoTags: config.infoTags,
  infoHeadingSecondary: config.infoHeadingSecondary,
  infoTextSecondary: config.infoTextSecondary,
  infoChildren: '<p>Lorem ipsum</p>'
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

export const HideBranding = Template.bind({})
HideBranding.args = {
  ...Default.args,
  hideBranding: true
}

export const HideThumbnails = Template.bind({})
HideThumbnails.args = {
  ...Default.args,
  hideThumbnails: true
}

export const Splash = Template.bind({})
Splash.args = {
  ...Default.args,
  splashDuration: 2000
}

export const ExteriorRotateEvent = Template.bind({})
ExteriorRotateEvent.args = {
  ...Default.args,
  onExteriorRotate: config.onExteriorRotate
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

export const ForceShowcase = Template.bind({})
ForceShowcase.args = {
  ...Default.args,
  forceShowcase: true
}

export const ForceShowcaseNoItems = Template.bind({})
ForceShowcaseNoItems.args = {
  ...Default.args,
  forceShowcase: true,
  items: []
}

export const ForceShowcaseNoItemsNoThumbnails = Template.bind({})
ForceShowcaseNoItemsNoThumbnails.args = {
  ...Default.args,
  forceShowcase: true,
  items: [],
  hideThumbnails: true
}

export const ForceShowcasNoThumbnails = Template.bind({})
ForceShowcasNoThumbnails.args = {
  ...Default.args,
  forceShowcase: true,
  hideThumbnails: true
}
