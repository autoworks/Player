import React from 'react'
import classNames from 'classnames'
import { bool, node } from 'prop-types'

import styles from './ButtonGroupWrapper.module.scss'

const ButtonGroupWrapper = ({ children, disabled, inverse }) => (
  <div
    className={classNames(
      styles.ButtonGroupWrapper,
      disabled && styles.disabled,
      inverse && styles.inverse
    )}
    role="group"
  >
    {children}
  </div>
)

ButtonGroupWrapper.propTypes = {
  children: node.isRequired,
  disabled: bool,
  inverse: bool
}

export default ButtonGroupWrapper
