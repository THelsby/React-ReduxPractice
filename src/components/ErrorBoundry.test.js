import { shallow } from "enzyme";
import React from "react";
import ErrorBoundry from "./ErrorBoundry";

it("Expect to render ErrorBoundry component", () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
});
