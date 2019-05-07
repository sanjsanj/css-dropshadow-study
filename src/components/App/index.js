import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";

import Pocket from "../Pocket";

import { defaultTheme, GlobalStyles } from "./styles";

function App(props) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />

        <h1>App...</h1>

        {!props.loadPage && (
          <button onClick={props.loadPageFunc}>Load page</button>
        )}

        {props.loadPage && (
          <>
            <Pocket
              content={[
                {
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
              ]}
            />

            <Pocket
              borderRadius={"6px"}
              content={[
                {
                  color: "#13c74d80",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
                {
                  color: "#e8232380",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
              ]}
            />

            <Pocket
              // horizontal={true}
              content={[
                {
                  color: "yellow",
                  growth: "0.40",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
                {
                  color: "orange",
                  growth: "0.60",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
                {
                  color: "red",
                  growth: "0.80",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
                {
                  color: "orange",
                  growth: "0.55",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
                {
                  color: "yellow",
                  growth: "0.35",
                  html: (
                    <p>
                      Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it
                      is.Note that if you don't actually want to change its
                      position on the x/y plane, then just specify that it is.
                    </p>
                  ),
                },
              ]}
            />
          </>
        )}
      </>
    </ThemeProvider>
  );
}

App.propTypes = {
  loadPageFunc: PropTypes.func.isRequired,
  loadPage: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loadPage: state.loadPage });
const mapDispatchToProps = dispatch => ({
  loadPageFunc: () => dispatch(actions.loadPage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
