import React from 'react'
import LabelEditor from 'components/LabelEditor'
import { mount } from 'enzyme'

describe('(Component) LabelEditor', function () {
  let _component
  let value = 'Click to edit...'

  const onChange = (val) => { value = val }

  beforeEach(function () {
    value = 'Click to edit...'
    _component = mount(<LabelEditor value={value} onChange={onChange} />)
  })

  it('Should render as a <span>.', function () {
    expect(_component.find('span')).to.exist
    expect(_component.find('span').text()).to.match(/Click to edit.../)
  })

  it('Should render text "Click to edit..."', function () {
    expect(_component.find('span').text()).to.match(/Click to edit.../)
  })

  it('Click on Text should change to Textarea', () => {
    _component.find('span').simulate('click')
    expect(_component.find('textarea')).to.exist
  })

  it('Blur on Textarea should change to span and call onChange', () => {
    _component.find('span').simulate('click')
    _component.setState({value: 'New Value'})
    _component.find('textarea').simulate('blur')
    expect(_component.find('span')).to.exist
    expect(value).to.match(/New Value/)
  })

  it('Escape should be restore prev value', () => {
    _component.find('span').simulate('click')
    _component.find('textarea').simulate('keydown', {keyCode: 27})
    expect(value).to.match(/Click to edit.../)
  })
})
