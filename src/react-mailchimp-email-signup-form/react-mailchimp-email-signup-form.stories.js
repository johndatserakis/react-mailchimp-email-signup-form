import React from "react";
import ReactMailchimpEmailSignupForm from "./react-mailchimp-email-signup-form";

export default {
  title: "ReactMailchimpEmailSignupForm"
};

export const Base = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId="first-email-signup-form"
      url="https://google.com"
      title="Subscribe to the Newsletter"
      subtitle="We take privacy seriously and we'll never spam or sell your information."
    />
  )
};

export const NoSubtitle = () => {
  return (
    <ReactMailchimpEmailSignupForm
      elementId="second-email-signup-form"
      url="https://google.com"
      title="Subscribe to the Newsletter"
    />
  )
};
