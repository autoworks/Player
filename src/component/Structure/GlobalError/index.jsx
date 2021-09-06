import React from 'react'

import Notification from '../../Primitive/Notification'

const GlobalError = () => (
  <Notification status="error" icon="error">
    <div>Something’s gone wrong. Please try again later.</div>
  </Notification>
)

export default GlobalError
