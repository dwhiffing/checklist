import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({ text, checked, onChange }) => (
  <div>
    <span>{text}</span>
    <input name={name} type="checkbox" checked={checked} onChange={onChange} />
  </div>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: undefined,
  onChange() {},
}

export default Checkbox
