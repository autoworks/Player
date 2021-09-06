const mapTranslationToDecimal = ({
  scale,
  width,
  height,
  offsetX,
  offsetY
}) => {
  // console.log({ scale, width, height, offsetX, offsetY })
  if (scale === 1) return { x: 0.5, y: 0.5 }
  return {
    x: ((offsetX * -1) / (width - width * scale)) * -1,
    y: ((offsetY * -1) / (height - height * scale)) * -1
  }
}

const mapTranslationToPixel = ({ scale, width, height, offsetX, offsetY }) => {
  // console.log({ scale, width, height, offsetX, offsetY })
  return {
    x: (width - width * scale) * offsetX,
    y: (height - height * scale) * offsetY
  }
}

export { mapTranslationToDecimal, mapTranslationToPixel }
