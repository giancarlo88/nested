import React from 'react'
import { shallow } from 'enzyme'
import EstimateBuilder from '../../containers/EstimateBuilder/EstimateBuilder'
import App from './App'


describe('<App/>', () => {
  it('renders an EstimateBuilder component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.type()).toEqual(EstimateBuilder)
  })
})
