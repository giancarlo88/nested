import React from 'react'
import { shallow } from 'enzyme'

import EstimatedValue from './EstimatedValue'

describe('<EstimatedValue />', () => {
  describe('@Renders', () => {
    it('should render a <div>', () => {
      const wrapper = shallow(<EstimatedValue />)
      expect(wrapper.type()).toBe('div')
    })
  })

  describe('@Props', () => {
    it('should display default text if no value prop is passed to it', () => {
      const wrapper = shallow(<EstimatedValue />)
      expect(wrapper.find('h3').text()).toBe('Please select house values to get an estimate.')
    })

    it('should display the value passed to it as a prop', () => {
      const wrapper = shallow(<EstimatedValue />)
      wrapper.setProps({ value: 8000 })
      expect(wrapper.find('h3').text()).toBe('8000')
    })
  })
})
