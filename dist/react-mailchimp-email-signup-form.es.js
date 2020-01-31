import React from 'react';

var ReactMailchimpEmailSignupForm = function (props) {
    return (React.createElement("div", { className: "subscribe-container" },
        React.createElement("div", { id: props.elementId + "mc_embed_signup" },
            React.createElement("form", { action: props.url, method: "post", id: props.elementId + "mc-embedded-subscribe-form", name: "mc-embedded-subscribe-form", className: "validate", target: "_blank" },
                React.createElement("div", { id: props.elementId + "mc_embed_signup_scroll" },
                    React.createElement("label", { className: "subscribe-container__title", htmlFor: "mce-EMAIL" }, props.title),
                    props.subtitle &&
                        React.createElement("p", { className: "subscribe-container__subtitle" }, props.subtitle),
                    React.createElement("input", { type: "email", defaultValue: "", name: "EMAIL", className: "subscribe-container__email", id: props.elementId + "mce-EMAIL", placeholder: "Your email address", required: true }),
                    React.createElement("div", { style: { position: "absolute", left: "-5000px" }, "aria-hidden": "true" },
                        React.createElement("input", { type: "text", name: "b_5f0b91c96bbdf35913a136639_ddfba3375e", tabIndex: -1, defaultValue: "" })),
                    React.createElement("div", null,
                        React.createElement("button", { type: "submit", defaultValue: "Subscribe", name: "subscribe", id: props.elementId + "mc-embedded-subscribe", className: "subscribe-container__submit" }, "Subscribe")))))));
};

export { ReactMailchimpEmailSignupForm };
//# sourceMappingURL=react-mailchimp-email-signup-form.es.js.map
