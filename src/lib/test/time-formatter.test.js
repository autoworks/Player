import formatTime from '../time-formatter'

describe('formatTime', function () {
  test('should return expected format', function () {
    expect(formatTime(0)).toEqual('0:00')
    expect(formatTime(1)).toEqual('0:01')
    expect(formatTime(1.123)).toEqual('0:01')
    expect(formatTime(599)).toEqual('9:59')
    expect(formatTime(600)).toEqual('10:00')
    expect(formatTime(3600)).toEqual('1:00:00')
    expect(formatTime(360009)).toEqual('100:00:09')
  })
})
