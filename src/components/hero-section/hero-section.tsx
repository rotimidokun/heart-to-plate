import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/hero-image.png";
import Ticket from "../../../public/tickets-icon.svg";
import HearToPlate from "../../../public/heart-to-plate.png";
// import { client } from "@/utils/config-sanity";

// import HeroImage from "https://images.pexels.com/photos/11714372/pexels-photo-11714372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// const HeroImage = require("https://images.pexels.com/photos/11714372/pexels-photo-11714372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

// async function getData() {}

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      <div className="w-full h-[full overflow-hidden">
        <Image
          src={HeroImage}
          className="h-auto w-full"
          alt="food"
          layout="responsive"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[#4E1544] opacity-25"></div>

      <div className="absolute text-white text-center inset-0 flex flex-col items-center justify-center">
        <p className="text-7xl font-bold">Heart To Plate</p>
        <p className="text-lg text-white">
          Tonight, we invite you to not only savor the delicious offerings but
          also to engage in conversations about the stories behind the recipes,
          the passion that drives the culinary artists, and the traditions that
          make each dish a work of art.
        </p>
        <p className="text-lg">21 December 2023</p>

        <div className="bg-[#64325B] opacity-[0.85] flex py-[1.125rem] px-[0.938rem] rounded-lg gap-5">
          <p>Get Tickets</p>
          <Image src={Ticket} alt="ticket" className="h-6 w-6" />
        </div>
      </div>
      <Image
        src={HearToPlate}
        alt="heart to plate"
        className="h-[9.375rem] w-[9.375rem] absolute bottom-6 right-6"
      />
    </div>
  );
};

export default HeroSection;
