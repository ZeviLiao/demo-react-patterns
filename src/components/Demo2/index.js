import React from "react";

const Page = ({ name, number }) => (
  <div>
    <h2>{name}</h2>
    <h3>{number}</h3>
  </div>
);

const numberAddOne = Component => ({ number, ...props }) => (
  <Component {...props} number={number + 1} />
);

const greetingWithName = greeting => Component => ({ name, ...props }) => (
  <Component {...props} name={`${greeting}, ${name}`} />
);

const addATitle = Component => props => (
  <React.Fragment>
    <h1>I'm Title</h1>
    <Component {...props} />
  </React.Fragment>
);

const Demo2 = addATitle(
  greetingWithName('Hello2')(
    numberAddOne(Page)
  )
)

export {
  Page,
  numberAddOne,
  greetingWithName,
  addATitle
}
export default Demo2