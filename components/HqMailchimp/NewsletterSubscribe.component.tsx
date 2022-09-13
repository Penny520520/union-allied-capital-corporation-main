import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import CustomForm from './CustomForm.component';

declare module "react-mailchimp-subscribe" {
  type Props = {
    url: string;
    subscribe: any;
    status: any;
    message: any;
  };
  var MailchimpSubscribe: React.ComponentClass<Props>;
}
const NewsletterSubscribe = () => {
  // export default () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  // if (!MailchimpSubscribe) return null;
  // const {comp:Comp} = props;
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        // const { subscribe, status, message } = props || {};
        return (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}

            //   const url = {MAILCHIMP_URL}
            // render={(props) => {
            //   const { subscribe, status, message } = props || {};
            //   return (
            //       <CustomForm
            //         status={status}
            //         message={message}
            //         onValidated={formData => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;

// import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import NewsletterForm from './NewsletterForm';

// const NewsletterSubscribe = () => {

//   const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

//   return (
//     <MailchimpSubscribe
//       url={ MAILCHIMP_URL }
//       render={ ( props ) => {
//         const { subscribe, status, message } = props || {};
//         return (
//           <NewsletterForm
//             status={ status }
//             message={ message }
//             onValidated={ formData => subscribe( formData ) }
//           />
//         );
//       } }
//     />
//   );
// };

// export default NewsletterSubscribe;
