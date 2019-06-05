import React, { Component } from 'react'


class Toggle extends React.Component {
  static defaultProps = { onToggle: () => { } }
  state = { on: false }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
  render() {
    return this.props.children({ on: this.state.on, toggle: this.toggle });
  }
}



export default class Home extends Component {
  render() {
    return (
      <Toggle
        onToggle={on => console.log('toggle', on)}
      >
        {({ on, toggle }) => (
          <div>
            {on ? 'The button is on' : 'The button is off'}
            <hr />
            <button onClick={toggle}>
              {on ? 'click on' : 'click off'}
            </button>
          </div>
        )}
      </Toggle>
    )
  }
}
