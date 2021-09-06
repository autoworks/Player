import React from 'react'
import { bool, func, oneOf } from 'prop-types'
import classNames from 'classnames'

import styles from './PaginationButton.module.scss'

import Icon from '../Icon'

const PaginationButton = ({ direction, disabled, inverse, onClick }) => (
  <button
    className={classNames(styles.PaginationButton, inverse && styles.inverse)}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {direction === 'previous' && (
      <Icon type="arrow-back" a11yText="Previous slide" />
    )}
    {direction === 'next' && (
      <Icon type="arrow-forward" a11yText="Next slide" />
    )}
  </button>
)

PaginationButton.propTypes = {
  direction: oneOf(['previous', 'next']).isRequired,
  disabled: bool,
  inverse: bool,
  onClick: func
}

export default PaginationButton
