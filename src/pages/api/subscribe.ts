// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!audienceId) {
    console.error('MAILCHIMP_AUDIENCE_ID is not defined');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

    await mailchimp.lists.setListMember(
      audienceId,
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'subscribed',
      }
    );

    return res.status(200).json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({ error: 'Error subscribing to newsletter' });
  }
}