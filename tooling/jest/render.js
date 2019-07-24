import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const render = (Component, props = {}) => {
  return shallow(<Component {...props} />)
}

const renderToJson = (Component, props) => {
  return toJson(render(Component, props))
}

export { renderToJson, render }
