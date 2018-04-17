import React from 'react'
import { shallow } from 'enzyme'

jest.mock('../../services/api', () => ({
  get: jest.fn()
}))

import { get } from '../../services/api'
import EstimateBuilder from './EstimateBuilder'


describe('<EstimateBuilder />', () => {
  describe('@methods', () => {
    const property = { address: 'foo', price: 234, floor_area: 12345 }
    const data = [property]

    get.mockReturnValue(Promise.resolve(data))
    describe('componentWillMount', () => {
      it('should set the state with data and add a selected proprety', async () => {
        const result = [{ ...property, selected: true }]
        const wrapper = await shallow(<EstimateBuilder />)
        await wrapper.update()
        await expect(wrapper.state('data')).toEqual(result)
      })
    })

    describe('handlePropertyClick', () => {
      it('should toggle the state of the propery whose index is passed to it ', async () => {
        const result = [{ ...property, selected: false }]

        const wrapper = await shallow(<EstimateBuilder />)
        await wrapper.update()
        await wrapper.instance().handlePropertyClick(0)
        await expect(wrapper.state('data')).toEqual(result)
      })
    })

    describe('calculateValue', () => {
      it('calculate average value based on the selected properties ', async () => {
        const data = [
          {
            address: '1 Benson Avenue',
            price: 315000,
            floor_area: 925,
            selected: true
          },
          {
            address: '57 Benson Avenue',
            price: 276000,
            floor_area: 957,
            selected: false
          },
          {
            address: '21 Benson Avenue',
            price: 280000,
            floor_area: 957,
            selected: true
          }
        ]
        const wrapper = await shallow(<EstimateBuilder />)
        wrapper.setState({ data })
        wrapper.update()
        // Assuming first and third are selected: ((315000 / 925) + (280000 / 957)) / 2 ) * 1100
        expect(wrapper.instance().calculateValue()).toBe(348216)
      })
    })
  })
})
