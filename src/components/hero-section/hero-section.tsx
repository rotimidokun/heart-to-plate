import React from "react";
import { client } from "@/utils/config-sanity";

import Image from "next/image";
import HeroImage from "https://images.pexels.com/photos/11714372/pexels-photo-11714372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

async function getData() {}

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute text-white text-center inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl">Heart To Plate</p>
        <p className="text-lg">21 December 2023</p>
      </div>

      <div className="max-w-full h-auto max-h-[750px]">
        <Image
          src={HeroImage}
          width={375}
          height={250}
          alt="food"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default HeroSection;
