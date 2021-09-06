import React from 'react'
import { node, bool } from 'prop-types'

const HotspotDebugContext = React.createContext()

const HotspotDebugContextProvider = ({ children, active }) => (
  <HotspotDebugContext.Provider value={active}>
    {children}
  </HotspotDebugContext.Provider>
)

HotspotDebugContextProvider.propTypes = {
  children: node.isRequired,
  active: bool
}

const HotspotDebugContextConsumer = HotspotDebugContext.Consumer

export {
  HotspotDebugContext,
  HotspotDebugContextProvider,
  HotspotDebugContextConsumer
}
