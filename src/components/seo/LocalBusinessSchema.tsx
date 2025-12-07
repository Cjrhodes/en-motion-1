import Script from 'next/script';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://enmotionmiami.com/#organization",
  "name": "En Motion",
  "description": "Fitness and self-defense training in Miami, FL. Personal training, self-defense classes, corporate wellness programs, and online training.",
  "url": "https://enmotionmiami.com",
  "telephone": "+1-786-925-8086",
  "email": "info@enmotionmiami.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "areaServed": {
    "@type": "City",
    "name": "Miami"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/enmotionmiami",
    "https://www.instagram.com/enmotionmiami",
    "https://twitter.com/enmotionmiami"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fitness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Training",
          "description": "One-on-one fitness training tailored to your goals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Self-Defense Classes",
          "description": "Learn practical self-defense skills for real-world safety"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Wellness",
          "description": "Fitness programs for businesses and organizations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online Training",
          "description": "Virtual fitness training from anywhere"
        }
      }
    ]
  }
};

export default function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      strategy="afterInteractive"
    />
  );
}
