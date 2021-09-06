import React from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

const SmartLink = ({
  children,
  className,
  disabled,
  href,
  setRef,
  to,
  target,
  type,
  ...other
}) => {
  // Standard link, use an `anchor` element
  if (href) {
    return (
      <a
        className={className}
        ref={setRef}
        {...(!disabled && { href })}
        {...(disabled && { 'aria-disabled': 'true' })}
        {...(target && { target })}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
        {...other}
      >
        {children}
      </a>
    )
  }

  // No `href` or `to` means we need a `button` element
  return (
    <button
      className={className}
      type={type}
      ref={setRef}
      {...(disabled && { disabled })}
      {...other}
    >
      {children}
    </button>
  )
}

SmartLink.defaultProps = {
  type: 'button'
}

SmartLink.propTypes = {
  children: node.isRequired,
  className: string,
  disabled: bool,
  href: string,
  setRef: func,
  to: string,
  target: string,
  type: oneOf(['button', 'reset', 'submit'])
}

export default SmartLink
