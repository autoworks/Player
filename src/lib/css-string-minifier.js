// Cheap CSS minification to remove multiple spaces (indentation) and new lines
const minifyCssString = (cssString) => cssString.replace(/ {2,}|\n/g, '')

export default minifyCssString
