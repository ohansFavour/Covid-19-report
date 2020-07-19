import React from "react";
import Cases from "./cases";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils";

describe("Cases Component", () => {
  describe("check prop types", () => {
    it("should have the right props", () => {
      const expectedProps = {
        img: true,
        alt: "test alt",
        value: 23,
        title: "test-title",
        color: "green",
      };

      const propsError = checkProps(Cases, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("renders properly", () => {
    let component;
    beforeEach(() => {
      component = shallow(<Cases/>);
    });
    it("renders the cases component", () => {
      const wrapper = findByTestAtrr(component, "case-test");
      expect(wrapper.length).toBe(1);
    });
  });
});
