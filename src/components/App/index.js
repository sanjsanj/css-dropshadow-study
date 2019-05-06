import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    min-height: 100vh;
  }
  body {
    margin: auto;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />

      <h1>App...</h1>
    </div>
  );
}

export default App;
