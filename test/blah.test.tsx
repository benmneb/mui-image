import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Image } from '../src'

// Definitely doesn't work

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Image src="https://picsum.photos/id/674/2000" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
