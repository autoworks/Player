import React from 'react'
import { render as domRender } from 'react-dom'

import AutoWorksPlayer from '../AutoWorksPlayerLibrary'

export default (element, initialConfig = {}) => {
  let config = { ...initialConfig }

  const render = () => {
    domRender(<AutoWorksPlayer {...config} />, element)
  }

  const updateConfig = (newConfig) => {
    config = { ...newConfig }
    render()
  }

  render()

  return { updateConfig }
}
