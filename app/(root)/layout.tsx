import Head from "next/head";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

// components
import { Footer, Navbar } from "@/components/shared";
import { ReactNode } from "react";

export const metadata = {
  title: "Homely",
  description: "Homely is platform to connect you with home service providers.",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <Head>
        {/* meta data */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>

      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
