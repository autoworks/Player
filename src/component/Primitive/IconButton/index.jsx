import React from 'react'
import { bool, number, string } from 'prop-types'
import classNames from 'classnames'

import styles from './IconButton.module.scss'

import Icon from '../Icon'
import SmartLink from '../SmartLink'

const IconButton = ({
  a11yText,
  children,
  className,
  icon,
  iconHeight,
  iconWidth,
  increaseHitArea,
  light,
  primary,
  rounded,
  small,
  solid,
  ...other
}) => (
  <SmartLink
    className={classNames(
      styles.IconButton,
      increaseHitArea && styles.increaseHitArea,
      light && styles.light,
      rounded && styles.rounded,
      primary && styles.primary,
      small && styles.small,
      solid && styles.solid,
      className
    )}
    {...other}
  >
    <div className={styles.IconButtonInner}>
      <Icon
        type={icon}
        height={iconHeight}
        width={iconWidth}
        a11yText={a11yText}
      />
      {children && <span className={styles.IconButtonText}>{children}</span>}
    </div>
  </SmartLink>
)

IconButton.propTypes = {
  a11yText: string.isRequired,
  children: string,
  className: string,
  icon: string.isRequired,
  iconHeight: number,
  iconWidth: number,
  increaseHitArea: bool,
  light: bool,
  primary: bool,
  rounded: bool,
  small: bool,
  solid: bool
}

export default IconButton
