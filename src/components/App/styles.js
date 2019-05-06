import styled, { createGlobalStyle } from "styled-components";

export const defaultTheme = {
  backgroundColor: "grey",
};

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${props => props.theme.backgroundColor};
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
