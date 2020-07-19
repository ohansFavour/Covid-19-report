import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./utils";

describe("App Component", () => {
  
  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<App />);
    });
    it("renders the App", () => {
      const wrapper = findByTestAtrr(component, "App-test");
      expect(wrapper.length).toBe(1);
    });
  });
});