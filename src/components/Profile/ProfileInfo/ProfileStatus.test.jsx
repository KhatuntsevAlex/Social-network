/* eslint-disable no-undef */
import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('Testing ProfileStatus component', () => {
  test('Status from props should be in the state', () => {
    const component = create(<ProfileStatus status="status" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('status')
  })

  test('After create <span> should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="status" />)
    const { root } = component
    const span = root.findByType('span')
    expect(span.length).toBe(1)
  })
})