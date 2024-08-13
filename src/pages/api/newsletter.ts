import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// Set up nodemailer transporter with your GoDaddy email credentials
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GODADDY_EMAIL,
    pass: process.env.GODADDY_PASSWORD
  }
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      // Here you would typically add the email to your mailing list
      // For this example, we'll just send a confirmation email

      await transporter.sendMail({
        from: `"Your Name" <${process.env.GODADDY_EMAIL}>`,
        to: email,
        subject: 'Welcome to Our Newsletter',
        text: 'Thank you for subscribing to our newsletter!'
      })

      res.status(200).json({ message: 'Subscription successful' })
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      res.status(500).json({ message: 'An error occurred' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
