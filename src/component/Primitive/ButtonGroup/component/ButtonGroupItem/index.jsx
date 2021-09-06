import React from 'react'
import classNames from 'classnames'
import { bool, node, oneOf } from 'prop-types'

import styles from './ButtonGroupItem.module.scss'

import Icon from '@/component/Primitive/Icon'
import SmartLink from '@/component/Primitive/SmartLink'

const ButtonGroupItem = ({
  active,
  children,
  icon,
  inactive,
  tight,
  ...other
}) => {
  const ButtonGroupItemEl = inactive ? 'div' : SmartLink

  return (
    <ButtonGroupItemEl
      className={classNames(
        styles.ButtonGroupItem,
        active && styles.active,
        tight && styles.tight
      )}
      {...other}
    >
      {icon && (
        <span className={styles.ButtonGroupItemIcon}>
          <Icon type={icon} height={20} a11yText="" />
        </span>
      )}
      {children}
    </ButtonGroupItemEl>
  )
}

ButtonGroupItem.propTypes = {
  active: bool,
  children: node.isRequired,
  icon: oneOf(['photo', 'rotate-camera', 'video']),
  inactive: bool,
  tight: bool
}

export default ButtonGroupItem
