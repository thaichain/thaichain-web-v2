"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Seeder Finance",
    designation: "Finalizing",
    image:
      "./seeder-finance.png",
  },
  {
    id: 2,
    name: "Ploutoz Finance",
    designation: "Finalizing",
    image:
      "./ploutoz-finance.jpg",
  },
  {
    id: 3,
    name: "Mar Exchange",
    designation: "Finalizing",
    image:
      "./mar.svg",
  },
  {
    id: 4,
    name: "MVP Token",
    designation: "Finalizing",
    image:
      "./mvp.jpg",
  },

];

export default function Animated() {
  return (
    <div className=" flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
