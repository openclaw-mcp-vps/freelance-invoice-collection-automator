import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFlow — Automate Invoice Collection for Freelancers",
  description: "Automated invoice tracking, email reminder sequences, and escalation workflows. Stop chasing payments and get paid faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fc10ca0-b065-4b31-a7e6-2d8dba38dcdd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
