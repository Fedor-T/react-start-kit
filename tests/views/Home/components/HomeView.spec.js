import React from 'react'
import { HomeView } from 'views/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const container = _component.find('div')
    expect(container).to.exist
    expect(container.text()).to.match(/Welcome!/)
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist
    expect(duck.attr('alt')).to.match(/This is a duck, because Redux!/)
  })

})
