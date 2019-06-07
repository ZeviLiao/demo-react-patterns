import React from "react";

const CenterBlock = ({ render, backgroundColor }) => (
  <div
    style={{
      backgroundColor,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px"
    }}
  >
    <h1>Block</h1>
    {render()}
  </div>
);

class Demo4 extends React.Component {
  renderBlock1 = () => (
    <>
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  );

  render() {
    return (
      <div>
        <CenterBlock backgroundColor="seagreen" render={this.renderBlock1} />
        <CenterBlock
          backgroundColor="lavenderblush"
          render={() => (
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
              </ul>
            </>
          )}
        />
      </div>
    );
  }
}

export default Demo4