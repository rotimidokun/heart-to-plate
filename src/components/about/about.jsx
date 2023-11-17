import Image from "next/image";
// import React from "react";
// import HappyPeople from "https://images.pexels.com/photos/6210512/pexels-photo-6210512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// import Tickets from "https://images.pexels.com/photos/17527817/pexels-photo-17527817/free-photo-of-tickets-text-on-yellow-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import MyStory from "../../../public/my-story.png";
import { GetTicketButton } from "../get-ticket-button";
import { FounderImageEllipse } from "@/assets/founder-image-ellipse";
import { Ellipse } from "@/assets/ellipse";
import Texture from "@/assets/texture.png";

export const About = () => {
  return (
    <div>
      <div className="bg-[#FFF4EA] pt-12 pb-16 px-5">
        <div className="flex justify-center">
          <Image
            src={MyStory}
            alt="my story"
            className="h-[4.875rem] w-[9.75rem]"
          />
        </div>

        <div className="py-10">
          <p className="text-[#64325B] text-center">
            I decided to take a break from the monotony of my job and set out on
            a journey of self-discovery. My destination was an enchanting little
            village in the south of France, known for its picturesque vineyards
            and quaint bistros. The beauty of the countryside was captivating,
            but it was the aromas wafting from the local kitchen that truly
            captured my heart.
            <br />
            <br />
            One evening, while strolling through the village square, I stumbled
            upon a small, family-owned restaurant. The flickering candlelight
            and the chatter of diners drew me in. As I entered, the air was
            filled with the heavenly scents of garlic, herbs, and sizzling
            butter. I took a seat and ordered a meal that would forever change
            my life.
          </p>
        </div>

        <div className="flex justify-center">
          <GetTicketButton />
        </div>
      </div>

      <div className="flex justify-center relative bg-[#FFF4EA] h-[26rem]">
        {/* <Image src={Texture} className="h-full w-full" alt="background" /> */}
        <FounderImageEllipse className="absolute top-0 left-36 z-10" />
        <Ellipse className="absolute top-0" />

        <div className="bottom-0 absolute flex flex-col justify-center items-center">
          <p className="text-[#8D337E] text-base font-medium">CEO</p>
          <p className="text-lg">EFEOSA SIGNATURES</p>
        </div>
      </div>
    </div>
  );
};
