import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styles from './CustomForm.styles.module.scss';
import Select from 'react-select';

declare const status: any;
// a basic form
// export default () => {
const CustomForm = ({ status, message, onValidated }) => {
  let email, FNAME, LNAME, PHONE, MMERGE8, MMERGE6, MMERGE7, ANAME;
  const optionsForHearaboutus = [
    { value: 'Friends and Family', label: 'Friends and Family' },
    { value: 'Realtor', label: 'Realtor' },
    {
      value: 'Signage / Walk by / Drive by',
      label: 'Signage / Walk by / Drive by',
    },
    { value: 'Online Search', label: 'Online Search' },
    { value: 'Social Media', label: 'Social Media' },
  ];
  const optionsForYouanagent = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];
  const optionsForWorkwitagent = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  const submit = () =>
    email &&
    FNAME &&
    LNAME &&
    PHONE &&
    MMERGE8 &&
    MMERGE6 &&
    MMERGE7 &&
    ANAME &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: FNAME.value,
      LNAME: LNAME.value,
      PHONE: PHONE.value,
      MMERGE8: MMERGE8.value,
      MMERGE6: MMERGE6.value,
      MMERGE7: MMERGE7.value,
      ANAME: ANAME.value,
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: 'inline-block',
      }}
      className={styles.registerFormContainer}
      id="mc_embed_signup"
    >
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div id="mc_embed_signup_scroll" className={styles.cEmbedSignupScroll}>
        <div className={styles.mcFieldGroup}>
          <input
            ref={node => (FNAME = node)}
            type="text"
            placeholder="*FIRST NAME"
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <input
            ref={node => (LNAME = node)}
            type="text"
            placeholder="*LAST NAME"
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <input
            ref={node => (PHONE = node)}
            type="text"
            placeholder="*PHONE NUMBER"
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <input
            ref={node => (email = node)}
            type="email"
            placeholder="* EMAIL ADDRESS"
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <Select
            options={optionsForHearaboutus}
            ref={node => (MMERGE8 = node)}
            placeholder="* How did you hear about us?"
            className={styles.selectOption}
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <Select
            options={optionsForYouanagent}
            ref={node => (MMERGE6 = node)}
            placeholder="* Are you an Agent?"
            className={styles.selectOption}
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <Select
            options={optionsForWorkwitagent}
            ref={node => (MMERGE7 = node)}
            placeholder="* Are you working with an Agent?"
            className={styles.selectOption}
          />
        </div>
        <div className={styles.mcFieldGroup}>
          <input
            ref={node => (ANAME = node)}
            type="text"
            placeholder="Agent / Realtor Name"
          />
        </div>
      </div>
      <div className={styles.mcFieldGroup}>
        <div className={styles.contentGdpr}>
          <fieldset className={styles.gdprRequired} name="interestgroup_field">
            <input type="checkbox" />
            <span>
              I agree to allow Union Allied and its affiliates to contact me and
              send me information via email, phone, or SMS. I understand I can
              unsubscribe at any time.
            </span>
          </fieldset>
        </div>
      </div>
      <div>
        <div>
          <button
            style={{ fontSize: '2em', padding: 5 }}
            onClick={submit}
            className={styles.registerBtn}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
// }

export default CustomForm;
