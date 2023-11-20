import Image from 'next/image';
import React from 'react';
import HeroImage from '@/assets/hero-image.png';
import Ticket from '../../../public/tickets-icon.svg';
import HearToPlate from '../../../public/heart-to-plate.png';
import { NavigateToSection } from '../navigate-section-button';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#4E1544] object-cover -z-20">
        <Image
          src={HeroImage}
          className="h-full w-full object-cover object-right"
          alt="food"
        />
      </div>

      <div className="absolute inset-0 bg-[#4E1544] opacity-[0.5] -z-10"></div>

      <div className="flex justify-center py-6">
        <Image src={HearToPlate} alt="heart to plate" className="" />
      </div>

      <div className="text-white text-center inset-0 flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold pb-4">Heart To Plate</p>
        <p className="text-base sm:text-lg text-white w-[75%] mx-auto my-0">
          Heart to Plate is a tasting experience designed to highlight the
          resilience of EFEOSASignatures' business owner. Having triumphed over
          a 5-hour open heart surgery, partial paralysis, and memory loss, we
          now stand strong, running a successful food business. The event brings
          together food enthusiasts to celebrate this remarkable journey with a
          feast of love and admiration.
        </p>
        <p className="text-2xl py-4 text-[#FFD281] font-semibold">
          9 December 2023
        </p>

        <div className="bg-[#64325B] opacity-[0.85] flex py-[1rem] px-[0.938rem] rounded-lg gap-5 mb-8">
          <a href="#tickets" className="text-base">
            Get Tickets
          </a>

          <Image src={Ticket} alt="ticket" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
