# react-mailchimp-email-signup-form

Easily collect email signups using MailChimp in your React projects.

<p align="left">
  <a href="https://www.npmjs.com/package/react-mailchimp-email-signup-form"><img src="https://img.shields.io/npm/v/react-mailchimp-email-signup-form.svg" alt="NPM Version"></a> &nbsp;
  <a href="https://www.npmjs.com/package/react-mailchimp-email-signup-form"><img src="https://img.shields.io/npm/dm/react-mailchimp-email-signup-form.svg" alt="NPM Downloads"></a> &nbsp;
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a> &nbsp;
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjohndatserakis%2Freact-mailchimp-email-signup-form&text=Check%20out%20react-mailchimp-email-signup-form%20on%20GitHub&via=johndatserakis"><img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/react-mailchimp-email-signup-form.svg?style=social" alt="Tweet"></a>
</p>

## Links

[View demo](https://johndatserakis.github.io/react-mailchimp-email-signup-form/)

[View on npm](https://www.npmjs.com/package/react-mailchimp-email-signup-form)

[View on GitHub](https://github.com/johndatserakis/react-mailchimp-email-signup-form)

## Vue Version

[Check out the Vue version!](https://github.com/johndatserakis/vue-mailchimp-email-signup-form)

## Install

### Package Manager

```bash
# npm
npm i react-mailchimp-email-signup-form

# yarn
yarn add react-mailchimp-email-signup-form
```

## Use

### CSS

```scss
// css import for when you want to import the component css into your css file/files
@import '/path/to/node_modules/react-mailchimp-email-signup-form/dist/esm/index.css';
```

```javascript
// javascript import for when you're importing the css directly in your javascript
import 'react-mailchimp-email-signup-form/dist/esm/index.css';
```

### React

```jsx
import React from 'react';
import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

// Here's a usage example when using functional components
export const SignupForm = () => (
  <ReactMailchimpEmailSignupForm
    elementId="first-email-signup-form"
    url="https://XX.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXX"
    title="Subscribe to the Newsletter"
    subtitle="We take privacy seriously and we'll never spam or sell your information."
  />
);
```

### About

This is just a really simple component that let's you use MailChimp's awesome email signup form but with a little bit more of a modern style. Normally for a component this simple I wouldn't really think to share it, but it ends up being really nice to use in things like Gatsby sites where you really don't want to bring a backend anywhere near your site. It's super easy to use - just follow the steps below to generate the `url` prop you need to pass to the component.

Go to your MailChimp admin. Click on `Create`, the `Signup Form`. Now, choose your audience, and stay on the `Embedded form` option and click `Begin`.

On the next screen, you'll see some demos for some embedded forms MailChip is offering. We don't want those - but we _do_ want to `url` they bring. Go into the form and grab the `url` from the `<form></form>` `action` attribute. For me, this looks something like the following:

```bash
https://XXXXX.us4.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXXXXXXXXXXXX&id=XXXXXXXXXX
```

This may look different in your case. Make sure you replace `&amp;` with an actual `&` if it gets copied like that.

That's it! Just add an `elementId`, `title`, and an optional `subtitle` and you're off.

You can see this form in action on my [blog](https://blog.johndatserakis.com/).

### Notes

I looked into using the MailChimp API option, but that is not going to work from a purely static-type of site. So, while this does have your users leave the page, it ends up being a great option because you really don't have to do anything with any backend at all. Just make sure you have the proper site settings set up so it redirects users back to your blog or whatever. You do this on MailChimp's side.

### Props

| prop      | type   | required | default | possible values | description                                              |
| --------- | ------ | -------- | ------- | --------------- | -------------------------------------------------------- |
| elementId | String | Yes      |         |                 | A unique string form your element.                       |
| url       | String | Yes      |         |                 | The particular form `post` url from your MailChimp page. |
| title     | String | Yes      |         |                 | A title for your signup form.                            |
| subtitle  | String | No       |         |                 | A subtitle for your signup form.                         |

### SCSS Structure

```scss
.subscribe-container {
  form {
  }

  &__title {
  }

  &__subtitle {
  }

  &__email {
  }

  &__submit {
    &:hover {
    }
  }
}
```

### Development

```bash
# Install dependencies
yarn

# Serve with hot reloading and Storybook
yarn storybook:start

# Run the tests
yarn test:unit

# Build everything and run tests
yarn build
```

## Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

## Thank You

Thank you to [MailChimp](https://mailchimp.com/).

## License

[MIT](http://opensource.org/licenses/MIT)
