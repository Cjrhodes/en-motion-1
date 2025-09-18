import { Providers } from "@/redux/provider";
// import { ToastContainer } from "react-toastify";
import Script from 'next/script';
// import { SpeedInsights } from '@vercel/speed-insights/react';
// import { Analytics } from "@vercel/analytics/react"

// Third-party CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";
// import "react-toastify/dist/ReactToastify.css";

// Custom CSS
import "../../public/css/all.min.css";
import "../../public/css/sharp-solid.min.css";
import "../../public/css/fontawesome.min.css";
import "../../public/css/animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
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
      </head>
      <body>
        {/* <SpeedInsights/> */}
        {/* <Analytics /> */}
        <Providers>
          {children}
          {/* <ToastContainer /> */}
        </Providers>
      </body> 
    </html>
  );
}
