import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone, formType, tag } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!audienceId) {
      console.error('MAILCHIMP_AUDIENCE_ID is not defined');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    
    // Add or update the subscriber
    await mailchimp.lists.setListMember(
      audienceId,
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'subscribed',
        merge_fields: formType === 'evaluation' ? { PHONE: phone } : {},
      }
    );

    // Add the tag
    if (tag) {
      await mailchimp.lists.updateListMemberTags(audienceId, subscriberHash, {
        tags: [{ name: tag, status: 'active' }],
      });
    }

    console.log(`Subscriber ${email} added/updated with tag: ${tag}`);
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed and tagged' 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { success: false, error: 'Error subscribing to newsletter' },
      { status: 500 }
    );
  }
}
