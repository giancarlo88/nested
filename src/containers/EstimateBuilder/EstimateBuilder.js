import React, { Component } from 'react'

import PropertyList from '../../components/PropertyList/PropertyList'
import Property from '../../components/Property/Property'
import EstimatedValue from '../../components/EstimatedValue/EstimatedValue'
import { get } from '../../services/api'

class EstimateBuilder extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.calculateValue = this.calculateValue.bind(this)
    this.handlePropertyClick = this.handlePropertyClick.bind(this)
  }

  componentWillMount() {
    get('/data/sample_data.json')
      .then((data) =>
        data.map((property) => ({
          ...property,
          selected: true
        }))
      )
      .then((data) => {
        this.setState({ data })
      })
      .catch((err) => {
        throw err
      })
  }

  calculateValue() {
    const { data } = this.state
    let totalSelectedProperties = 0
    const totalPricePerSquareFoot = data.reduce((price, currentProperty) => {
      if (currentProperty.selected) {
        totalSelectedProperties += 1
        const pricePerSquareFoot = currentProperty.price / currentProperty.floor_area
        return price += pricePerSquareFoot
      }
      return price
    }, 0)

    // The 1100 constant should really be a value taken from a UI field... I didn't have time :(
    return Math.floor((totalPricePerSquareFoot / totalSelectedProperties) * 1100)
  }

  handlePropertyClick(index) {
    this.setState((currentState) => {
      const { data } = currentState
      const newData = data.map((property, propertyIndex) => {
        if (index === propertyIndex) {
          return { ...property, selected: !property.selected }
        }
        return property
      })
      return { data: newData }
    })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <h4>Click on properties to include or remove them from the calculation. Properties in green are included</h4>
        <PropertyList>
          {data.map((property, index) => (
            <Property
              key={property.address}
              index={index}
              handleClick={() => this.handlePropertyClick(index)}
              {...property}
            />
          ))}
        </PropertyList>
        <EstimatedValue value={this.calculateValue()} />
      </div>
    )
  }
}

export default EstimateBuilder
