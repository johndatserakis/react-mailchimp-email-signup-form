import React from "react";
import "./react-mailchimp-email-signup-form.scss";

interface Props {
  elementId: string;
  url: string;
  title: string;
  subtitle?: string;
};

const ReactMailchimpEmailSignupForm = (props: Props) => {
  return (
    <div className="subscribe-container">
      <div id={props.elementId + "mc_embed_signup"}>
        <form
          action={props.url}
          method="post"
          id={props.elementId + "mc-embedded-subscribe-form"}
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id={props.elementId + "mc_embed_signup_scroll"}>
            <label
              className="subscribe-container__title"
              htmlFor="mce-EMAIL"
            >
              {props.title}
            </label>

            {props.subtitle &&
              <p className="subscribe-container__subtitle">
                {props.subtitle}
              </p>
            }

            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="subscribe-container__email"
              id={props.elementId + "mce-EMAIL"}
              placeholder="Your email address"
              required
            />
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_5f0b91c96bbdf35913a136639_ddfba3375e"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div>
              <button
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id={props.elementId + "mc-embedded-subscribe"}
                className="subscribe-container__submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReactMailchimpEmailSignupForm
