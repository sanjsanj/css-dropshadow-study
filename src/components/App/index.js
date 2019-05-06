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
              linearGradientColor: "#13c74d80",
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
              linearGradientColor: "#e8232380",
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
          horizontal={true}
          content={[
            {
              linearGradientColor: "#13c74d80",
              growth: "80%",
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
              linearGradientColor: "#e8232380",
              growth: "60%",
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
              linearGradientColor: "#0000ff80",
              growth: "40%",
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
              linearGradientColor: "#ffa60080",
              growth: "",
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
