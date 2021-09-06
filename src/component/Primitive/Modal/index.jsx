import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { bool, func, node, number, object, string } from 'prop-types'
import useEscapeKey from '../../../hook/useEscapeKey'
import useOutsideClick from '../../../hook/useOutsideClick'
import minifyCssString from '@/lib/css-string-minifier'

import FocusTrap from 'focus-trap-react'

import styles from './Modal.module.scss'

import VisuallyHidden from '../VisuallyHidden'

const Modal = ({
  ariaLabel,
  children,
  onClose,
  open,
  role,
  watermark,
  colors,
  zIndex
}) => {
  const ref = useRef()

  const handleClose = () => {
    open && onClose && onClose()
  }

  useEscapeKey(handleClose)
  useOutsideClick(ref, handleClose)

  if (!open) return null
  if (typeof window === 'undefined') return null

  const area = document.getElementById('player-portal') || document.body

  return createPortal(
    <aside
      className={styles.Modal}
      role={role}
      aria-label={ariaLabel}
      aria-modal="true"
      style={{ ...(zIndex && { zIndex }) }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: minifyCssString(`
            .${styles.Modal} {
              --color-accent: ${colors.accent};
              --color-accent-text: ${colors.accentText};
            }
          `)
        }}
      />
      <FocusTrap>
        <div className={styles.ModalInner}>
          <div className={styles.ModalBg} />
          <div className={styles.ModalContent} ref={ref}>
            <VisuallyHidden>
              <button name="modal-content" tabIndex="0">
                Modal content start
              </button>
            </VisuallyHidden>
            {children}
          </div>
          {watermark && <div className={styles.ModalLogo}>{watermark}</div>}
        </div>
      </FocusTrap>
    </aside>,
    area
  )
}

Modal.defaultProps = {
  role: 'dialog'
}

Modal.propTypes = {
  actions: node,
  ariaLabel: string.isRequired,
  children: node.isRequired,
  onClose: func,
  open: bool,
  role: string,
  watermark: node,
  colors: object,
  zIndex: number
}

export default Modal
