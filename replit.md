# En Motion - Fitness & Self-Defense Portfolio

## Overview
This is a Next.js 15 portfolio website for En Motion, a fitness and self-defense training business based in Miami, FL. The site features:
- Personal training programs
- Self-defense seminars
- Corporate wellness programs
- Online training programs
- Pricing information
- Testimonials
- Newsletter signup

## Tech Stack
- **Framework**: Next.js 15.5.3 with TypeScript
- **UI Libraries**: React 18, MUI Material, Bootstrap, Styled Components
- **Animation**: Framer Motion, GSAP, Animate.css
- **State Management**: Redux Toolkit
- **Email**: Nodemailer, Resend
- **Forms**: React Hook Form
- **Sliders**: React Slick, Swiper
- **Analytics**: Vercel Analytics (commented out)

## Project Structure
```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes (subscribe)
│   │   ├── pricing/        # Pricing page
│   │   ├── self-defense-event/ # Event page
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── about/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── navbar/
│   │   ├── pricing/
│   │   ├── program/
│   │   └── testimonials/
│   ├── data/              # Static data
│   ├── pages/api/         # API routes (send-email)
│   ├── redux/             # Redux store and slices
│   └── utilities/
├── public/                # Static assets (images, CSS, fonts)
└── removed/              # Archived files

```

## Replit Configuration

### Development
- **Port**: 5000 (configured for Replit's webview)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Workflow**: "Next.js Dev Server" runs `npm run dev`
- **Dev Server**: Configured with cache control headers to prevent caching issues in Replit's iframe

### Deployment
- **Type**: Autoscale (stateless web application)
- **Build**: `npm run build`
- **Start**: `npm run start` (runs on port 5000)

### Key Configuration Changes for Replit
1. Updated `package.json` scripts to bind to `0.0.0.0:5000`
2. Added cache control headers in `next.config.js` to prevent iframe caching
3. Configured image optimization with quality settings
4. Set up remote image patterns for all domains

## Running Locally
```bash
npm install
npm run dev
```
Visit http://localhost:5000

## Environment Variables
The project uses environment variables for:
- Email services (Nodemailer, Resend)
- Mailchimp integration
- Analytics (optional)

## Notes
- Node.js version requirement: >=22.0.0 (currently using v20.19.3 with warnings)
- Some Vercel-specific features are commented out (Analytics, Speed Insights)
- Bootstrap and custom CSS are loaded from the public directory
