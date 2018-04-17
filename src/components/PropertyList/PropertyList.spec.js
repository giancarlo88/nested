import React from 'react'
import { shallow } from 'enzyme'

import PropertyList from './PropertyList'

describe('<PropertyList />', () => {
  describe('@Renders', () => {
    it('should render a <div>', () => {
      const wrapper = shallow(<PropertyList />)
      expect(wrapper.type()).toBe('div')
    })

    it('should render any child components', () => {
      const wrapper = shallow(<PropertyList><div className='child' /></PropertyList>)
      expect(wrapper.find('.child').length).toBe(1)
    });
  })

})
