import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ReactMailchimpEmailSignupForm from "./react-mailchimp-email-signup-form";

export default {
  title: "ReactMailchimpEmailSignupForm",
  decorators: [withKnobs]
};

export const Base = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId={text("elementId", "first-email-signup-form")}
      url={text("url", "https://mailchimp.com/")}
      title={text("title", "Subscribe to the Newsletter")}
      subtitle={text("subtitle", "We take privacy seriously and we'll never spam or sell your information.")}
    />
  )
};

export const NoSubtitle = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId={text("elementId", "second-email-signup-form")}
      url={text("url", "https://mailchimp.com/")}
      title={text("title", "Subscribe to the Newsletter")}
    />
  )
};
