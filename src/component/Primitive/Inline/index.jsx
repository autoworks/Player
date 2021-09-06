import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf, string } from 'prop-types'
// import sassKeysToArray from '../../../lib/sass-keys-to-array'

import styles from './Inline.module.scss'

// const gaps = sassKeysToArray(styles.gaps)
const gaps = ['small', 'medium', 'large']

const Inline = ({ as, children, gap, shrink }) => {
  const InlineEl = as || 'div'

  return (
    <InlineEl
      className={classNames(
        styles.Inline,
        gap && styles[gap],
        shrink && styles.shrink
      )}
    >
      {children}
    </InlineEl>
  )
}

Inline.defaultProps = {
  gap: 'medium'
}

Inline.propTypes = {
  as: string,
  children: node.isRequired,
  gap: oneOf(gaps),
  shrink: bool
}

export default Inline
