import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King Ezekiel | Digital Systems Strategist & Consultant",
  description: "Specializing in auditing and architecting systems that turn cold strangers into loyal customers. We build high-converting infrastructure to scale revenue and operations.",
  openGraph: {
    title: "King Ezekiel | Digital Systems Strategist & Consultant",
    description: "Specializing in auditing and architecting systems that turn cold strangers into loyal customers. We build high-converting infrastructure to scale revenue and operations.",
    url: 'https://thekingezekiel.com',
    siteName: 'King Ezekiel',
    images: [
      {
        url: '/images/hero.jpg', 
        width: 1200,
        height: 630,
        alt: 'King Ezekiel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-portfolio-bg text-portfolio-fg font-sans`}
      >
        {children}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '783723702287413');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=783723702287413&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
