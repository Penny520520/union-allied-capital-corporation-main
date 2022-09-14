import { fetch } from '~/server/packages';
import { OrNull } from '~/types';

export interface HQIMailingListMember {
  agreeToBeContacted: boolean;
  companyName?: string;
  email: string;
  firstName?: string;
  inquiry?: string;
  lastName?: string;
  phoneNumber?: string;
  source?: string;
  areYouAgent?: boolean;
  broker?: string;
  withAgent?: boolean;
  agentName?: string;
}

enum MailingListStatus {
  SUBSCRIBED = 'subscribed',
  UNSUBSCRIBED = 'unsubscribed',
  CLEANED = 'cleaned',
  PENDING = 'pending',
  TRANSACTIONAL = 'transactional',
  ARCHIVED = 'archived',
}

interface IAddMemberToMailingListArgs {
  member: HQIMailingListMember;
}

interface IAddMemberToMailingListErrorResponse {
  status: number;
  detail: string;
}

interface IAddMemberToMailingListSuccessResponse {
  status: MailingListStatus;
}

// `anystring:c47424e07f62f70e82e71d9b9d4174a1-us20`
// ).toString(`base64`)}`;

// const response = await fetch(
//   `https://us20.api.mailchimp.com/3.0/lists/976d627fd9/members`,

export async function hqaddMemberToMailingListAsync({
  member,
}: IAddMemberToMailingListArgs): Promise<
  OrNull<{ error: string; status: number }>
> {
  const Authorization = `Basic ${Buffer.from(
    `anystring:${process.env.HQ_MAILCHIMP_API_KEY}`
  ).toString(`base64`)}`;

  const response = await fetch(
    `https://${process.env.HQ_MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.HQ_MAILCHIMP_LIST_ID}/members`,
    {
      body: JSON.stringify({
        email_address: member.email,
        merge_fields: {
          CONTACT: member.agreeToBeContacted ? `Yes` : `No`,
          COMPANY: member.companyName,
          FIRST_NAME: member.firstName,
          INQUIRY: member.inquiry,
          LAST_NAME: member.lastName,
          PHONE: member.phoneNumber,
          SOURCE: member.source,
          MMERGE8: member.areYouAgent ? `Yes` : `No`,
          MMERGE9: member.broker,
          MMERGE10: member.withAgent ? `Yes` : `No`,
          MMERGE11: member.agentName,
        },
        status: `subscribed`,
      }),
      headers: {
        Authorization,
        [`Content-Type`]: `application/json`,
      },
      method: `POST`,
    }
  ).catch(error => {
    console.dir(error);
    // return fetch(
    //   `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    //   {
    //     body: JSON.stringify({
    //       email_address: member.email,
    //       merge_fields: {
    //         CONTACT: member.agreeToBeContacted ? `Yes` : `No`,
    //         COMPANY: member.companyName,
    //         FIRST_NAME: member.firstName,
    //         INQUIRY: member.inquiry,
    //         LAST_NAME: member.lastName,
    //         PHONE: member.phoneNumber,
    //         SOURCE: member.source,
    //       },
    //       status: `subscribed`,
    //     }),
    //     headers: {
    //       Authorization;
    //       [`Content-Type`]: `application/json`,
    //     },
    //     method: `POST`,
    //   }
    // );
  });

  if (response) {
    const json = (await response.json()) as
      | IAddMemberToMailingListErrorResponse
      | IAddMemberToMailingListSuccessResponse;

    return isError(json) ? { error: json.detail, status: json.status } : null;
  }

  return null;
}

function isError(
  response:
    | IAddMemberToMailingListErrorResponse
    | IAddMemberToMailingListSuccessResponse
): response is IAddMemberToMailingListErrorResponse {
  return typeof response.status === `number`;
}
