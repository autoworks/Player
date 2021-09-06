import React from 'react'
import validateRequiredProps from '@/lib/validate-required-props'
import { render } from '@testing-library/react'
import { HotspotDebugContextProvider, HotspotDebugContextConsumer } from '.'

const requiredProps = () => ({ children: 'Default content' })

describe('Component: HotspotDebugContext', function () {
  validateRequiredProps(HotspotDebugContextProvider, requiredProps())

  test('should output the expected markup with default props', function () {
    const { getByText } = render(
      <HotspotDebugContextProvider {...requiredProps()} />
    )
    expect(getByText('Default content')).toBeTruthy()
  })

  test('should output true value when `active` prop passed', function () {
    const { getByText } = render(
      <HotspotDebugContextProvider {...requiredProps()} active>
        <HotspotDebugContextConsumer>
          {(active) => <span>Received: {active && 'true'}</span>}
        </HotspotDebugContextConsumer>
      </HotspotDebugContextProvider>
    )
    expect(getByText('Received: true')).toBeTruthy()
  })
})
