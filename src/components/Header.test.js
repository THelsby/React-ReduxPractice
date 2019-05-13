import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("Expect to render Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
