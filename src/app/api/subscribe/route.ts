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
    console.log('Received body in /api/subscribe:', JSON.stringify(body, null, 2)); // Log the entire request body with formatting
    const { email, phone, formType, tag, packageType } = body;

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
    
    try {
      await mailchimp.lists.setListMember(
        audienceId,
        subscriberHash,
        {
          email_address: email,
          status_if_new: 'subscribed',
          merge_fields: {
            ...(formType === 'evaluation' && { PHONE: phone }),
            ...(packageType && { PLAN: packageType }) // Ensure this uses the plan value (e.g., 'individual')
          },
        }
      );
    } catch (error) {
      console.error('Error setting list member:', error);
      return NextResponse.json(
        { success: false, error: 'Error setting list member' },
        { status: 500 }
      );
    }

    if (tag) {
      console.log('Adding tag to subscriber:', tag);
      try {
        await mailchimp.lists.updateListMemberTags(audienceId, subscriberHash, {
          tags: [{ name: tag, status: 'active' }],
        });
      } catch (error) {
        console.error('Error updating list member tags:', error);
        return NextResponse.json(
          { success: false, error: 'Error updating list member tags' },
          { status: 500 }
        );
      }
    }

    console.log(`Subscriber ${email} added/updated with package type: ${packageType}`);
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed with package type' 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { success: false, error: 'Error subscribing to newsletter' },
      { status: 500 }
    );
  }
}