import { appReducer, appReducerInitialState } from ".";
import * as types from "../constants";

describe("appReducer", () => {
  it("should return the initial state on instantiation", () => {
    expect(appReducer(undefined, {})).toEqual(appReducerInitialState);
  });

  it("can handle the load page action", () => {
    const expected = { loadPage: true };
    const action = { type: types.LOAD_PAGE };
    const actual = appReducer(undefined, action);

    expect(actual).toEqual(expected);
  });
});
