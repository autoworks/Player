import React from 'react'
import { node } from 'prop-types'

import styles from './Example.module.scss'

/**
 * Starter component which can be duplicated and used as a starting point for
 * others.
 */

const Example = ({ children }) => (
  <div className={styles.Example}>{children}</div>
)

Example.propTypes = {
  children: node.isRequired
}

export default Example
