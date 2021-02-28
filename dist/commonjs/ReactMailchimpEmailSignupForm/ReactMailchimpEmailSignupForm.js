'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ReactMailchimpEmailSignupForm = function ReactMailchimpEmailSignupForm(_ref) {
  var elementId = _ref.elementId,
      url = _ref.url,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "subscribe-container"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "".concat(elementId, "mc_embed_signup")
  }, /*#__PURE__*/React__default['default'].createElement("form", {
    action: url,
    method: "post",
    id: "".concat(elementId, "mc-embedded-subscribe-form"),
    name: "mc-embedded-subscribe-form",
    className: "validate",
    target: "_blank"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    id: "".concat(elementId, "mc_embed_signup_scroll")
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    className: "subscribe-container__title",
    htmlFor: "mce-EMAIL"
  }, title), subtitle && /*#__PURE__*/React__default['default'].createElement("p", {
    className: "subscribe-container__subtitle"
  }, subtitle), /*#__PURE__*/React__default['default'].createElement("input", {
    type: "email",
    defaultValue: "",
    name: "EMAIL",
    className: "subscribe-container__email",
    id: "".concat(elementId, "mce-EMAIL"),
    placeholder: "Your email address",
    required: true
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    type: "text",
    name: "b_5f0b91c96bbdf35913a136639_ddfba3375e",
    tabIndex: -1,
    defaultValue: ""
  })), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("button", {
    type: "submit",
    defaultValue: "Subscribe",
    name: "subscribe",
    id: "".concat(elementId, "mc-embedded-subscribe"),
    className: "subscribe-container__submit"
  }, "Subscribe"))))));
};

exports.ReactMailchimpEmailSignupForm = ReactMailchimpEmailSignupForm;
