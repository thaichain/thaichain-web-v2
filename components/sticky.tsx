"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "CONTACT",
    description:
      "You specify an audit-ready code commit to us.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        CONTACT
      </div>
    ),
  },
  // {
  //   title: "AUDIT",
  //   description:
  //     "We start the audit.",
  //   content: (
  //     <div id="" className="h-full w-full  flex items-center justify-center text-white">
  //       <Image
  //         src="./next.svg"
  //         width={300}
  //         height={300}
  //         className="h-full w-full object-cover"
  //         alt="linear board demo"
  //       />
  //     </div>
  //   ),
  // },
  {
    title: "AUDIT",
    description:
      "We start the audit.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        AUDIT
      </div>
    ),
  },
  {
    title: "PUBLISH",
    description:
      "We examine your fixes, update and publish the report (optional).",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        PUBLISH
      </div>
    ),
  },
];
export default function Sticky() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
