import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ReactMailchimpEmailSignupForm from "./react-mailchimp-email-signup-form";

export default {
  title: "ReactMailchimpEmailSignupForm",
  decorators: [withKnobs]
};

export const Base = () => {
  return (
    <Fragment>
      <ReactMailchimpEmailSignupForm
        elementId={text("elementId", "first-email-signup-form")}
        url={text("url", "https://mailchimp.com/")}
        title={text("title", "Subscribe to the Newsletter")}
        subtitle={text("subtitle", "We take privacy seriously and we will never spam or sell your information.")}
      />

      <p>
        Link to this component's <a href="https://github.com/johndatserakis/react-mailchimp-email-signup-form" target="_blank" rel="noopener noreferrer">github.</a>
      </p>
    </Fragment>
  )
};

export const NoSubtitle = () => {
  return (
    <Fragment>
      <ReactMailchimpEmailSignupForm
        elementId={text("elementId", "second-email-signup-form")}
        url={text("url", "https://mailchimp.com/")}
        title={text("title", "Subscribe to the Newsletter")}
      />

      <p>
        Link to this component's <a href="https://github.com/johndatserakis/react-mailchimp-email-signup-form">github.</a>
      </p>
    </Fragment>
  )
};
