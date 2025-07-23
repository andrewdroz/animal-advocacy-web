
import twilio from 'twilio';

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
  const { twilioAccount } = useRuntimeConfig(event)
  const { twilioToken } = useRuntimeConfig(event)

  console.log('twilioAccount');
  console.log(twilioAccount);
  const client = twilio(twilioAccount, twilioToken);

  const verification= await client.verify.v2.services("VA7221bf41ea61fdb5c683bb1158286841")
    .verifications
    .create({to: '+6597106707', channel: 'sms'});
  console.log(verification.sid);
});
