import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from '.'

import Inline from '../Inline'

const stories = storiesOf('Core/Modal', module)

stories.add(
  'Info',
  () => (
    <>
      See examples in following stories
      <Modal
        heading="Example Heading"
        onClose={action('Close clicked')}
        ariaLabel="Example Modal"
      >
        Example Content
      </Modal>
    </>
  ),
  {
    info: {
      inline: true,
      text: `
        A static modal overlay which uses an \`open\` prop to show/hide.

        Has lots of accessibility functionality built-in, including
        focus-trapping, keyboard/click-outside closing.

        _Note: This component doesn’t include the state-based functionality
        required to show/hide: see \`<ModalWithTrigger />\`_.
      `
    }
  }
)

stories.add('Dismiss', () => (
  <Modal open onClose={action('Close clicked')} ariaLabel="Example Modal">
    Example Content
  </Modal>
))

stories.add('Alert', () => (
  <Modal
    open
    onClose={action('Close clicked')}
    ariaLabel="Example Modal"
    actions={<button onClick={action('OK clicked')}>OK</button>}
  >
    Example content
  </Modal>
))

stories.add('Dialog', () => (
  <Modal
    open
    onClose={action('Close clicked')}
    ariaLabel="Example Modal"
    actions={
      <Inline>
        <button onClick={action('Save clicked')}>Save</button>
        <button onClick={action('Cancel clicked')}>Cancel</button>
      </Inline>
    }
  >
    Example content
  </Modal>
))

stories.add('With Heading', () => (
  <Modal
    heading="Example Heading"
    ariaLabel="Example Label"
    children="Default content"
    open
    onClose={action('Close clicked')}
  />
))

stories.add('Closed (nothing visible)', () => (
  <Modal
    heading="Example Heading"
    ariaLabel="Example Label"
    children="Default content"
    onClose={action('Close clicked')}
  />
))
