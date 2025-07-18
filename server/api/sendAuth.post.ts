
const accountSid = process.env.twilio_account;
const authToken = process.env.twilio_token;
import twilio from 'twilio';
const client = twilio(accountSid, authToken);

export default defineEventHandler<{ body: { number: string } }>(async (event) => {
  console.log('accountSid');
  console.log(accountSid);
    const verification= await client.verify.v2.services("VA7221bf41ea61fdb5c683bb1158286841")
      .verifications
      .create({to: '+6597106707', channel: 'sms'});
    console.log(verification.sid);
});
