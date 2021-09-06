import React from 'react'
import { string } from 'prop-types'

import styles from './Tag.module.scss'

const Tag = ({ children }) => <li className={styles.Tag}>{children}</li>

Tag.propTypes = {
  children: string.isRequired
}

export default Tag
