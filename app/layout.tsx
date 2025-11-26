import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://martin-portfolio.com/"),
  title: "Martin Dev - SWE | IXD | UX - Developer Portfolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from VietNam with 1+ years of expertise. Frontend Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Martin Dev",
    "Martin",
    "Dev",
    "MartinDev",
    "Martin_Dev",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Martin Dev - SWE | IXD | UX",
    description:
      "Developer Portfolio of Frontend & Mobile App Developer from VietNam with 1+ years of expertise. Frontend Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
    images: "/OpenGraph.png",
  }, 
  alternates: {
    canonical: "https://martin-portfolio.com/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Martin Dev",
              jobTitle: "Frontend Engineer",
              url: "https://martin-portfolio.com",
              sameAs: [
                "https://www.linkedin.com/in/martin-dev/",
                "https://github.com/nghimartin",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
