import React from 'react'
// import { node } from 'prop-types'

import styles from './Header.module.scss'

import Icon from '../../Primitive/Icon'
import VisuallyHidden from '../../Primitive/VisuallyHidden'

const Header = () => (
  <header role="banner" className={styles.Header}>
    <div className={styles.HeaderInner}>
      <h1>
        <a href="https://auto.works/">
          <Icon type="logo" width={164} a11yText="" />
          <VisuallyHidden>Auto.Works</VisuallyHidden>
        </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {}

export default Header
