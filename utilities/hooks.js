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

module.exports.fileState = (callback = undefined) => {
  const [value, setValue] = React.useState()

  function onChange (e) {
    setValue(e.target.files[0])
    if (callback !== undefined) callback(e)
  }

  return {
    value,
    onChange
  }
}
