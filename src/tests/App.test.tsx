import { describe, test, expect } from 'vitest'
import React from 'react';
import { render } from '@testing-library/react'
import App from '../components/App'

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()
    const div = wrapper.container.querySelector('div')
    expect(div?.className).toBe('app-container')
  })
});

