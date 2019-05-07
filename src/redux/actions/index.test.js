import * as actions from ".";
import * as types from "../constants";

describe("actions", () => {
  it("can create an action to loadPage", () => {
    const expected = { type: types.LOAD_PAGE };
    const actual = actions.loadPage();

    expect(expected).toEqual(actual);
  });
});
