import React from 'react'
import { bool } from 'prop-types'

import styles from './Rule.module.scss'

const Rule = ({ functional }) => {
  const RuleEl = functional ? 'hr' : 'div'
  return <RuleEl className={styles.Rule} />
}

Rule.propTypes = {
  functional: bool
}

export default Rule
