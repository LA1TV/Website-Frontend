import React from 'react'

module.exports.inputState = (defaultValue = '') => {
  const [value, setValue] = React.useState(defaultValue)

  function onChange (e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
