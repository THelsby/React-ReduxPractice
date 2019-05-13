import { shallow } from "enzyme";
import React from "react";
import Scroll from "./Scroll";

it("Expect to render Scroll component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
