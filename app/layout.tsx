import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from '@/context'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThaiChain 2.0",
  description: "ThaiShield the security audits service.",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider >{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
