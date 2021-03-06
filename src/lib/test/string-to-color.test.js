import stringToColor from '../string-to-color'

describe('stringToColor()', function () {
  test('should return expected colour from string', function () {
    expect(stringToColor('Picks')).toEqual('#529498')
    expect(stringToColor('Firstname Lastname')).toEqual('#a60f02')
    expect(stringToColor('')).toEqual('#000000')
  })

  test('should return early without expected types', function () {
    expect(stringToColor(1)).toEqual(undefined)
    expect(stringToColor(() => {})).toEqual(undefined)
  })
})
