import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Index from 'pages/index.js'

const render = (props = {}) => {
  return mount(<Index {...props} />)
}

describe('index', () => {
  it('should be able to render', () => {
    const wrapper = render()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
