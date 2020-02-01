/// <reference types="react" />
import "./react-mailchimp-email-signup-form.scss";
interface Props {
    elementId: string;
    url: string;
    title: string;
    subtitle?: string;
}
declare const ReactMailchimpEmailSignupForm: (props: Props) => JSX.Element;
export default ReactMailchimpEmailSignupForm;
