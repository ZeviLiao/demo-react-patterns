
ref :  

https://levelup.gitconnected.com/understanding-react-higher-order-components-by-example-95e8c47c8006

The higher-order component pattern
```
const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
    
  return HOC;
};
```