import React from 'react'
import { array, bool, func, string } from 'prop-types'
import classNames from 'classnames'

import styles from './ModalHeader.module.scss'

import IconButton from '../IconButton'
import TypeNav from '../TypeNav'

const ModalHeader = ({
  activeType,
  availableTypes,
  description,
  heading,
  inverse,
  onChange,
  onClose
}) => (
  <div className={classNames(styles.ModalHeader, inverse && styles.inverse)}>
    <div className={styles.ModalHeaderContent}>
      {heading && <div className={styles.ModalHeaderHeading}>{heading}</div>}
      {description && (
        <div className={styles.ModalHeaderDescription}>{description}</div>
      )}
    </div>
    <div className={styles.ModalHeaderActions}>
      <TypeNav
        availableTypes={availableTypes}
        activeType={activeType}
        inverse
        onChange={onChange}
      />
    </div>
    <div>
      <IconButton
        type="button"
        icon="close"
        a11yText="Close Modal"
        onClick={onClose}
        small
      />
    </div>
  </div>
)

ModalHeader.propTypes = {
  activeType: string,
  availableTypes: array,
  description: string,
  heading: string,
  inverse: bool,
  onChange: func,
  onClose: func
}

export default ModalHeader
