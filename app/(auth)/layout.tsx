import Head from "next/head";
import { ReactNode } from "react";
import "@/app/globals.css"

export const metadata = {
  title: "Homely",
  description: "Login to Homely ",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
