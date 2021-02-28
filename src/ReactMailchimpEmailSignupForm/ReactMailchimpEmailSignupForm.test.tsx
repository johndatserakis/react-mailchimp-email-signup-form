import React from 'react';
import { render } from '@testing-library/react';

import { ReactMailchimpEmailSignupForm } from './ReactMailchimpEmailSignupForm';

const props = {
  elementId: 'first-email-signup-form',
  url: 'https://mailchimp.com/',
  title: 'Subscribe to the Newsletter',
  subtitle: 'We take privacy seriously and we will never spam or sell your information.',
};

describe('<ReactMailchimpEmailSignupForm />', () => {
  test('renders component', () => {
    const { getByText } = render(<ReactMailchimpEmailSignupForm {...props} />);

    expect(getByText(props.title, { exact: false })).toBeInTheDocument();
    expect(getByText(props.subtitle, { exact: false })).toBeInTheDocument();
  });
});
