import minifyCssString from '../css-string-minifier'

const cssString = () => `
  .class {
    padding: 20px;
    box-shadow: 10px 0 3px #000, 3px 0 10px #555,
  }
  @media all and (min-width: 0px) {
    .class {
      background-image: url(600.jpg);
    }
  }
`

describe('minifyCssString', function () {
  test('should return information about opaque color passed', function () {
    expect(minifyCssString(cssString())).toEqual(
      '.class {padding: 20px;box-shadow: 10px 0 3px #000, 3px 0 10px #555,}@media all and (min-width: 0px) {.class {background-image: url(600.jpg);}}'
    )
  })
})
