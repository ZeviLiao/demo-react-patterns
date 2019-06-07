import React, { Component } from 'react';
import withSecretToLife from './components/withSecretToLife';

class DisplayTheSecret extends Component {
  render() {
    const { secretToLife } = this.props
    return (
      <div>
        Hello, {secretToLife}
      </div>
    )
  }
}

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent