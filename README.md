
home / demo1  
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

```
const SimpleHOC = higherOrderComponent(MyComponent);
```


demo2 / demo3  / demo4
ref:  
https://medium.com/frochu/hoc-%E8%88%87renderprops-%E8%AB%87%E6%88%91%E5%BE%9E%E5%A5%B9%E5%80%91%E8%BA%AB%E4%B8%8A%E5%AD%B8%E5%88%B0%E4%BB%80%E9%BA%BC-2681ab4cc453

https://www.robinwieruch.de/react-pass-props-to-component/