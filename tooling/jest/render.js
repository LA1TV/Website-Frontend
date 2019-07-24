import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

const render = (Component, props = {}) => {
  return mount(<Component {...props} />)
}

const renderToJson = (Component, props) => {
  return toJson(render(Component, props))
}

export { renderToJson, render }
