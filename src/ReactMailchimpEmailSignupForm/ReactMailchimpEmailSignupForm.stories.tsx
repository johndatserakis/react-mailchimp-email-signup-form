import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ReactMailchimpEmailSignupForm, ReactMailchimpEmailSignupFormProps } from './ReactMailchimpEmailSignupForm';

export default {
  title: 'ReactMailchimpEmailSignupForm',
  component: ReactMailchimpEmailSignupForm,
  argTypes: {},
} as Meta;

const Template: Story<ReactMailchimpEmailSignupFormProps> = (args) => <ReactMailchimpEmailSignupForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  elementId: 'first-email-signup-form',
  url: 'https://mailchimp.com/',
  title: 'Subscribe to the Newsletter',
  subtitle: 'We take privacy seriously and we will never spam or sell your information.',
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  elementId: 'first-email-signup-form',
  url: 'https://mailchimp.com/',
  title: 'Subscribe to the Newsletter',
  subtitle: '',
};
