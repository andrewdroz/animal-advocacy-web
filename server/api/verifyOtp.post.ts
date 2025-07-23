
import twilio from 'twilio';

export default defineEventHandler<{ body: { otp: string } }>(async (event) => {
  const { twilioAccount } = useRuntimeConfig(event)
  const { twilioToken } = useRuntimeConfig(event)

  const client = twilio(twilioAccount, twilioToken);

  const body = await readBody(event);

  const check = await client.verify.v2.services("VA7221bf41ea61fdb5c683bb1158286841")
      .verificationChecks
      .create({to: '+6597106707', code: body.otp});
      
  console.log(check.status);
});
