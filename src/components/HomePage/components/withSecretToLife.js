import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  const HOC = (props) => {
    return (
      <WrappedComponent
        {...props}
        secretToLife={43}
      />
    );
  }
  return HOC;
};

export default withSecretToLife;