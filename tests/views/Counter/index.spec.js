import React from 'react'
import Counter from 'views/Counter'
import { mount } from 'enzyme'
import sinon from 'sinon';

describe('(View) Counter', () => {
  let _component

  beforeEach(() => {
    _component = mount(<Counter />)
  })

  it('Renders a welcome message', () => {
    const count = _component.find('h2 span')
    expect(count).to.exist
    expect(count.text()).to.match(/0/)
  })

  it('Click on button increment store value', () => {
    const button = _component.find('button')
    button.simulate('click');
    expect(button).to.exist
    expect(_component.find('h2 span').text()).to.match(/1/)
  })

})
