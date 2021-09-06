const config = {
  colors: {
    // accent: '#984eab',
    // accentText: '#fff'
  },

  infoHeading: 'Volkswagen Tiguan',
  infoText: 'SWB SEL 2.0 TDI 4Motion',
  infoTags: ['Tag one', 'Another', 'One more', 'Fourth tag'],
  infoHeadingSecondary: '£26,990',
  infoTextSecondary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas luctus ex eget mattis. Donec cursus vulputate lacus eu luctus. In pretium massa ac rhoncus elementum. Donec in iaculis dui. Nunc suscipit diam a mi semper bibendum. Integer interdum arcu ac magna semper condimentum. Nam rutrum nibh velit, in fermentum enim hendrerit quis. Praesent quis ex ut nunc pulvinar convallis a a enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mattis dapibus nisl in placerat. Duis vel sapien tempor, ornare dui at, tristique ipsum. Proin varius nibh vitae dui rhoncus, at mollis felis bibendum. Phasellus in consectetur mauris. Nulla enim nisl, molestie at dignissim quis, blandit nec lectus.',

  showcaseHeading: 'Volkswagen Tiguan',
  showcaseDescription: 'SWB SEL 2.0 TDI 4Motion',

  // containerClass: 'custom-container-class',

  // styles: 'body { font-family: Impact, "FF Mark";}',

  onNavigation: ({ id, index, type }) => {
    console.log(`Navigated to “${id}” item at index ${index} (${type})`)
  },
  onShowcaseEnter: () => {
    console.log('Entered showcase mode')
  },
  onShowcaseExit: () => {
    console.log('Exited showcase mode')
  },
  onVideoProgress: ({ id, index, progress }) => {
    console.log(
      `Video “${id}”at index ${index} progressed to ${progress} seconds`
    )
  }
}

export default config
