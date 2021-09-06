import React from 'react'
import { array, func, string } from 'prop-types'

import styles from './ViewerHeader.module.scss'

import ButtonGroup from '../ButtonGroup'
import Icon from '../Icon'
import Inline from '../Inline'
import TypeNav from '../TypeNav'

const ViewerHeader = ({ activeType, availableTypes, onChange, onZoom }) => (
  <div className={styles.ViewerHeader}>
    <Inline>
      <ButtonGroup inverse>
        <ButtonGroup.Item tight onClick={onZoom}>
          <Icon type="zoom-in" a11yText="Zoom in" />
        </ButtonGroup.Item>
      </ButtonGroup>

      <div className={styles.ViewerHeaderTypeNav}>
        <TypeNav
          availableTypes={availableTypes}
          activeType={activeType}
          inverse
          onChange={onChange}
        />
      </div>
    </Inline>
  </div>
)

ViewerHeader.propTypes = {
  activeType: string,
  availableTypes: array,
  onChange: func,
  onZoom: func
}

export default ViewerHeader
