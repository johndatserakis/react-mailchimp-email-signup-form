import React from "react";
import { shallow } from "enzyme";

import ReactMailchimpEmailSignupForm from "./react-mailchimp-email-signup-form";

describe("react-mailchimp-email-signup-form", () => {
  let props: any;

  beforeEach(() => {
    props = {
      elementId: "first-email-signup-form",
      url: "https://mailchimp.com/",
      title: "Subscribe to the Newsletter",
      subtitle: "We take privacy seriously and we'll never spam or sell your information."
    };
  });

  const renderWrapper = () => shallow(<ReactMailchimpEmailSignupForm {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as Base version", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
