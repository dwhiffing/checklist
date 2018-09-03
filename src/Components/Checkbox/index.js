import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.css'

const Checkbox = ({ name, label, checked, onChange }) => (
  <div>
    <input name={name} type="checkbox" checked={checked} onChange={onChange} />
    <span> {label}</span>
  </div>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  onChange() {},
}

export default Checkbox
