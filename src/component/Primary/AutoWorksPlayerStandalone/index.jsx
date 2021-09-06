import React from 'react'

import AutoWorksPlayer from '../AutoWorksPlayerLibrary'

export default (element, initialConfig = {}) => {
  let config = { ...initialConfig }

  const render = () => {
    render(<AutoWorksPlayer {...config} />, element)
  }

  const updateConfig = (newConfig) => {
    config = { ...newConfig }
    render()
  }

  render()

  return { updateConfig }
}
