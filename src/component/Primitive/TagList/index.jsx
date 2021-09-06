import React from 'react'
import { node } from 'prop-types'

import Inline from '../Inline'

const TagList = ({ children }) => (
  <div>
    <Inline as="ul" gap="small">
      {children}
    </Inline>
  </div>
)

TagList.propTypes = {
  children: node.isRequired
}

export default TagList
