import React from 'react'
import { shape, array, bool, func, string } from 'prop-types'

import ButtonGroup from '../ButtonGroup'

const typeMap = {
  exterior: { title: 'Exterior', icon: 'rotate-camera' },
  interior: { title: 'Interior', icon: 'rotate-camera' },
  photo: { title: 'Photo', icon: 'photo' },
  video: { title: 'Video', icon: 'video' }
}

const TypeNav = ({
  activeType,
  availableTypes,
  inverse,
  onChange,
  topNav = {}
}) => (
  <ButtonGroup inverse={inverse}>
    {availableTypes.map((type, i) => (
      <ButtonGroup.Item
        key={`ButtonGroupItem:${i}`}
        active={activeType === type}
        icon={typeMap[type].icon}
        onClick={() => onChange(type)}
      >
        {topNav[`${type}Caption`] || typeMap[type].title}
      </ButtonGroup.Item>
    ))}
  </ButtonGroup>
)

TypeNav.defaultProps = {
  availableTypes: []
}

TypeNav.propTypes = {
  activeType: string,
  availableTypes: array,
  inverse: bool,
  onChange: func,
  topNav: shape({
    interiorCaption: string,
    exteriorCaption: string,
    videoCaption: string,
    photoCaption: string
  })
}

export default TypeNav
