import React from "react";
import { ThemeProvider } from "styled-components";

import Pocket from "../Pocket";

import { defaultTheme, GlobalStyles } from "./styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />

        <h1>App...</h1>

        <Pocket
          content={[
            {
              html: (
                <p>
                  Note that if you don't actually want to change its position on
                  the x/y plane, then just specify that it is.Note that if you
                  don't actually want to change its position on the x/y plane,
                  then just specify that it is.
                </p>
              ),
            },
          ]}
        />

        <Pocket
          borderRadius={"6px"}
          content={[
            {
              linearGradientColor: "#00ffff1c",
              html: (
                <p>
                  Note that if you don't actually want to change its position on
                  the x/y plane, then just specify that it is.Note that if you
                  don't actually want to change its position on the x/y plane,
                  then just specify that it is.
                </p>
              ),
            },
            {
              linearGradientColor: "#ff76001c",
              html: (
                <p>
                  Note that if you don't actually want to change its position on
                  the x/y plane, then just specify that it is.Note that if you
                  don't actually want to change its position on the x/y plane,
                  then just specify that it is.
                </p>
              ),
            },
          ]}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
