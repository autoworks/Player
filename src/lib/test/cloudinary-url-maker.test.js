import buildCloudinaryImageUrl from '../cloudinary-url-maker'

describe('buildCloudinaryImageUrl', function () {
  test('should return expected url with default options', function () {
    expect(buildCloudinaryImageUrl({})).toEqual(
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto,d_placeholder.png/placeholder.png'
    )
  })

  test('should return expected url with public_id', function () {
    expect(
      buildCloudinaryImageUrl({ publicId: 'cms/ibikfunq5p26zxxyfg8z' })
    ).toEqual(
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto,d_placeholder.png/cms/ibikfunq5p26zxxyfg8z.jpg'
    )
  })

  test('should return expected url with transformations', function () {
    expect(
      buildCloudinaryImageUrl({
        publicId: 'cms/ibikfunq5p26zxxyfg8z',
        width: 200,
        height: 150,
        crop: 'fill'
      })
    ).toEqual(
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto,d_placeholder.png,w_200,h_150,c_fill/cms/ibikfunq5p26zxxyfg8z.jpg'
    )
  })

  test('should return expected url with aspect ratio', function () {
    expect(
      buildCloudinaryImageUrl({
        publicId: 'cms/ibikfunq5p26zxxyfg8z',
        width: 200,
        ratio: '16:9'
      })
    ).toEqual(
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto,d_placeholder.png,w_200,ar_16:9/cms/ibikfunq5p26zxxyfg8z.jpg'
    )
  })

  test('should return expected url with custom format', function () {
    expect(
      buildCloudinaryImageUrl({
        publicId: 'cms/ibikfunq5p26zxxyfg8z',
        extension: 'png'
      })
    ).toEqual(
      'https://res.cloudinary.com/citygate/image/upload/f_auto,q_auto,d_placeholder.png/cms/ibikfunq5p26zxxyfg8z.png'
    )
  })
})
