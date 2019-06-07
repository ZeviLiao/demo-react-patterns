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

const numberTimesTwo =
  somtText => (
    Component => ({ number, ...props }) =>
      (
        <>
          <h3>{somtText}</h3>
          <Component {...props} number={number * 2} />
        </>
      )
  )

const greetingWithName =
  greeting => (
    Component =>
      ({ name, ...props }) => (
        <Component {...props} name={`${greeting}, ${name}`} />
      )
  )

const addATitle = Component => props => (
  <>
    <h1>I'm Title</h1>
    <Component {...props} />
  </>
);

const addAFooter = Component => props => (
  <>
    <Component {...props} />
    <hr />
    <h2>I'm Footer</h2>
  </>
);

const Demo2 = addAFooter(
  addATitle(
    greetingWithName('Hello2')(
      numberTimesTwo('times!!')(
        numberAddOne(Page)
      )
    )
  )
)

export {
  Page,
  numberAddOne,
  greetingWithName,
  addATitle,
  addAFooter,
  numberTimesTwo

}
export default Demo2