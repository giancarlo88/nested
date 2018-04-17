import React from 'react'
import { shallow } from 'enzyme'

import Property from './Property'

describe('<Property />', () => {
  const address = '22 Wallaby Way'
  const price = 42
  const floor_area = 800
  const selected = false
  const props = { address, price, floor_area, selected }

  describe('@Renders', () => {
    it('should render a <div>', () => {
      const wrapper = shallow(<Property {...props} />)
      expect(wrapper.type()).toBe('div')
    })
  })

  describe('@Props', () => {
    it('should display the address, price, and floor area passed to it as props', () => {
      const wrapper = shallow(<Property {...props} />)
      expect(wrapper.find('h2').text()).toBe(address)
      expect(wrapper.find('p').at(0).text()).toBe(`Price: ${price}`)
      expect(wrapper.find('p').at(1).text()).toBe(`Floor area: ${floor_area}`)
    })
  })
})
