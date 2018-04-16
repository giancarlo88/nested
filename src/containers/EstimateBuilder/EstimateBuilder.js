import React, { Component } from 'react'
import { get } from '../../services/api';

class PropertyList extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    get('/data/sample_data.json')
      .then((data) => {
        this.setState({
          data
        })
      })
      .catch((err) => {
        throw new Error(err)
    })
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}

export default PropertyList
