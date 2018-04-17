import React from 'react'

import PropTypes from 'prop-types'

const EstimatedValue = ({ value }) => (
  <div>
    <h2>Estimated Value:</h2>
    <h3>{value || 'Please select house values to get an estimate.'}</h3>
  </div>
)

EstimatedValue.propTypes = {
  value: PropTypes.number
}

EstimatedValue.defaultProps = {
  value: 0
}

export default EstimatedValue
