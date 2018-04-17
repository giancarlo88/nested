import React from 'react'

import PropTypes from 'prop-types'

// Can be replaced by a third party library (e.g. styled-components)
const generateStyle = (selected) => selected ? { backgroundColor: 'green' } : {}

const Property = ({ address, price, floor_area, selected, handleClick }) => (
  <div onClick={handleClick} style={generateStyle(selected)}>
    <h2>{address}</h2>
    <p>Price: {price}</p>
    <p>Floor area: {floor_area}</p>
  </div>
)

Property.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  floor_area: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
}

export default Property
