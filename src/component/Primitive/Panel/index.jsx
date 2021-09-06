import React from 'react'
import { node } from 'prop-types'

import styles from './Panel.module.scss'

import ScrollArea from '@/component/Primitive/ScrollArea'

const Panel = ({ children }) => (
  <div className={styles.Panel}>
    <ScrollArea>
      <div className={styles.PanelContent}>{children}</div>
    </ScrollArea>
  </div>
)

Panel.propTypes = {
  children: node.isRequired
}

export default Panel
