import { Providers } from "@/redux/provider";
import Script from 'next/script';
import type { Metadata } from 'next';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

// Third-party CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Custom CSS
import "../../public/css/boxicons.min.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import { spaceGrotesk } from './fonts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enmotionmiami.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'En Motion | Fitness & Self-Defense Training in Miami, FL',
    template: '%s | En Motion Miami',
  },
  description: 'Transform your life with En Motion in Miami, FL. We offer personal training, self-defense classes, corporate wellness programs, and online training. Book your free evaluation today!',
  keywords: ['fitness training Miami', 'self-defense classes Miami', 'personal trainer Miami', 'corporate wellness Miami', 'kickboxing Miami', 'martial arts Miami', 'online fitness training', 'En Motion'],
  authors: [{ name: 'En Motion' }],
  creator: 'En Motion',
  publisher: 'En Motion',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'En Motion',
    title: 'En Motion | Fitness & Self-Defense Training in Miami, FL',
    description: 'Transform your life with En Motion in Miami, FL. Personal training, self-defense classes, corporate wellness, and online training programs.',
    images: [
      {
        url: '/img/girl-kickboxing1.jpg',
        width: 1200,
        height: 630,
        alt: 'En Motion - Fitness & Self-Defense Training in Miami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En Motion | Fitness & Self-Defense Training in Miami, FL',
    description: 'Transform your life with En Motion in Miami, FL. Personal training, self-defense classes, corporate wellness, and online training.',
    images: ['/img/girl-kickboxing1.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'AW-16680316399',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16680316399"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16680316399');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRV6N87N');
          `}
        </Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1565872654553895');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1565872654553895&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={spaceGrotesk.variable} suppressHydrationWarning>
        <LocalBusinessSchema />
        <Providers>
          {children}
        </Providers>
      </body> 
    </html>
  );
}
