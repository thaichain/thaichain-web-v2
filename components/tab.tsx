"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export default function Tab() {
  const tabs = [
    {
      title: "Services",
      value: "service",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Service tab</p>
          <ServiceContent />
        </div>
      ),
    },
    {
      title: "Products",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <ProductContent />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const ServiceContent = () => {
  return (
    <Image
      src="./tch-20.png"
      alt="dummy image"
      width="400"
      height="400"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const ProductContent = () => {
  return (
    <Image
      src="./p-1.jpg"
      alt="dummy image"
      width="400"
      height="400"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
