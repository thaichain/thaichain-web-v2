import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/spotlight";
import Link from 'next/link'

export default function Spots() {
  return (
    <div className="h-[40rem] w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-auto p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          ThaiShield <br /> the security audits service.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          ThaiShield verifies that your distributed systems work as intended by performing an audit. Our engineers fully review your system’s architecture and codebase, and then write a thorough report that includes actionable feedback for every issue found.
          <br /><br />
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="https://www.facebook.com/thaichain.io" target="_blank">
              REQUEST AN AUDIT
            </Link>
          </button>
          <br /><br />
        </p>
      </div>
    </div>
  );
}
