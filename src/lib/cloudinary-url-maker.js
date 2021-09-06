const buildCloudinaryImageUrl = (props) => {
  const { width, height, ratio, crop, vehicleCategory } = props

  const defaultPublicId =
    vehicleCategory === 'van' ? 'van-placeholder' : 'placeholder.png'
  const defaultPlaceholder =
    vehicleCategory === 'van' ? 'van-placeholder.png' : 'placeholder.png'

  let {
    publicId = defaultPublicId,
    placeholder = defaultPlaceholder,
    extension = 'jpg'
  } = props

  if (publicId && publicId.includes('.png')) {
    publicId = publicId.replace('.png', '')
    extension = 'png'
  }

  const transforms = ['f_auto', 'q_auto']
  if (placeholder) {
    transforms.push(`d_${placeholder}`)
  }
  if (width) {
    transforms.push('w_' + width)
  }
  if (height) {
    transforms.push('h_' + height)
  }
  if (ratio) {
    transforms.push('ar_' + ratio)
  }
  if (crop) {
    transforms.push('c_' + crop)
  }

  const urlParts = [publicId]
  if (transforms.length > 0) {
    urlParts.unshift(transforms.join(','))
  }
  const imageUrl = `https://res.cloudinary.com/citygate/image/upload/${urlParts.join(
    '/'
  )}.${extension}`

  return imageUrl
}

export default buildCloudinaryImageUrl
