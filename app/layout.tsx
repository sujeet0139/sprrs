import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sprsschool.com"),
  title: "Shri Rama Prasad Singh Shiksha Sansthan - Best School in Azamgarh",
  description: "Empowering Future Through Education Since 1986. Quality education with strong moral values for classes 1-12 in Pushp Nagar, Azamgarh.",
  keywords: ["school", "Azamgarh", "best school", "education", "SRPSS", "Shri Rama Prasad Singh Shiksha Sansthan", "CBSE school"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shri Rama Prasad Singh Shiksha Sansthan - Best School in Azamgarh",
    description: "Empowering Future Through Education Since 1986. Quality education with strong moral values for classes 1-12 in Pushp Nagar, Azamgarh.",
    url: "https://sprsschool.com",
    siteName: "SRPSS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Rama Prasad Singh Shiksha Sansthan",
    description: "Empowering Future Through Education Since 1986 in Azamgarh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col font-open-sans overflow-x-hidden">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
