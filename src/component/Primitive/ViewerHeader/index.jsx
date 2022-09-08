import React from 'react'
import { shape, array, func, string } from 'prop-types'

import styles from './ViewerHeader.module.scss'

import ButtonGroup from '../ButtonGroup'
import Icon from '../Icon'
import Inline from '../Inline'
import TypeNav from '../TypeNav'

const ViewerHeader = ({
  activeType,
  availableTypes,
  onChange,
  onZoom,
  topNav
}) => (
  <div className={styles.ViewerHeader}>
    <Inline>
      <ButtonGroup inverse>
        <ButtonGroup.Item tight onClick={onZoom}>
          <Icon type="zoom-in" a11yText="Zoom in" />
        </ButtonGroup.Item>
      </ButtonGroup>

      {availableTypes.length > 1 && (
        <div className={styles.ViewerHeaderTypeNav}>
          <TypeNav
            availableTypes={availableTypes}
            activeType={activeType}
            inverse
            onChange={onChange}
            topNav={topNav}
          />
        </div>
      )}
    </Inline>
  </div>
)

ViewerHeader.defaultProps = {
  availableTypes: []
}

ViewerHeader.propTypes = {
  activeType: string,
  availableTypes: array,
  onChange: func,
  onZoom: func,
  topNav: shape({
    interiorCaption: string,
    exteriorCaption: string,
    videoCaption: string,
    photoCaption: string
  })
}

export default ViewerHeader
