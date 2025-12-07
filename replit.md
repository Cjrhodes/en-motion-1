# En Motion - Fitness & Self-Defense Portfolio

## Overview
A Next.js 15 portfolio website for En Motion, a fitness and self-defense training business based in Miami, FL. Features include:
- Personal training programs
- Self-defense seminars
- Corporate wellness programs
- Online training programs
- Pricing information
- Testimonials
- Newsletter signup with Mailchimp integration

## Tech Stack
- **Framework**: Next.js 15.5.3 with TypeScript
- **UI Libraries**: React 18, MUI Material, Bootstrap, Styled Components
- **Animation**: Framer Motion, GSAP, Animate.css
- **State Management**: Redux Toolkit
- **Email**: Nodemailer, Resend, Mailchimp
- **Forms**: React Hook Form
- **Sliders**: React Slick, Swiper

## Project Structure
```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/subscribe/      # Mailchimp subscription API
│   │   ├── pricing/            # Pricing page
│   │   ├── self-defense-event/ # Event page
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── about/              # About section
│   │   ├── decoline/           # Decorative line sections
│   │   ├── footer/             # Footer component
│   │   ├── form/               # Evaluation form
│   │   ├── founder/            # Founder section
│   │   ├── header/             # Header/navigation
│   │   ├── hero/               # Hero slider
│   │   ├── modal/              # Contact form modals
│   │   ├── navbar/             # Navigation bar
│   │   ├── newsletter/         # Newsletter signup
│   │   ├── pricing/            # Pricing section
│   │   ├── program/            # Training programs
│   │   └── testimonials/       # Testimonials section
│   ├── data/                   # Static data (programs, testimonials)
│   ├── pages/api/              # Legacy API routes (send-email)
│   └── redux/                  # Redux store and slices
├── public/                     # Static assets
│   ├── css/                    # Stylesheets
│   ├── fonts/                  # Font files
│   ├── img/                    # Images
│   ├── video/                  # Video files
│   └── webfonts/               # Web fonts
└── next.config.js              # Next.js configuration
```

## Replit Configuration

### Development
- **Port**: 5000 (configured for Replit's webview)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Workflow**: "Next.js Dev Server" runs `npm run dev`

### Deployment
- **Type**: Autoscale (stateless web application)
- **Build**: `npm run build`
- **Start**: `npm run start` (runs on port 5000)

## Environment Variables
Required for full functionality:
- `MAILCHIMP_API_KEY` - Mailchimp API key
- `MAILCHIMP_SERVER_PREFIX` - Mailchimp server prefix (e.g., "us1")
- `MAILCHIMP_AUDIENCE_ID` - Mailchimp audience/list ID

Optional:
- Email service credentials (Nodemailer, Resend)

## Running Locally
```bash
npm install
npm run dev
```
Visit http://localhost:5000

## Notes
- Node.js version requirement: >=22.0.0 (runs with v20.19.3)
- Vercel Analytics features are commented out
- Bootstrap and custom CSS are loaded from the public directory
