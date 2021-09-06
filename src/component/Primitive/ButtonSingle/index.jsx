import React from 'react'
import { bool, func, string } from 'prop-types'

import ButtonGroup from '../ButtonGroup'
import Icon from '../Icon'

const ButtonSingle = ({
  a11yText,
  disabled,
  icon,
  inactive,
  inverse,
  onClick
}) => (
  <ButtonGroup inverse={inverse} disabled={disabled}>
    <ButtonGroup.Item
      tight
      onClick={onClick}
      inactive={inactive}
      disabled={disabled}
    >
      <Icon type={icon} a11yText={a11yText} />
    </ButtonGroup.Item>
  </ButtonGroup>
)

ButtonSingle.propTypes = {
  a11yText: string.isRequired,
  disabled: bool,
  icon: string.isRequired,
  inactive: bool,
  inverse: bool,
  onClick: func
}

export default ButtonSingle
