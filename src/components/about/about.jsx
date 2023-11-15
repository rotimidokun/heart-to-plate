import Image from "next/image";
// import React from "react";
// import HappyPeople from "https://images.pexels.com/photos/6210512/pexels-photo-6210512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// import Tickets from "https://images.pexels.com/photos/17527817/pexels-photo-17527817/free-photo-of-tickets-text-on-yellow-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import MyStory from "../../../public/my-story.png";
import { GetTicketButton } from "../get-ticket-button";

export const About = () => {
  return (
    <div className="bg-[#FFF4EA]">
      <div>
        <Image
          src={MyStory}
          alt="my story"
          className="h-[4.875rem] w-[9.75rem]"
        />

        <div>
          <p>
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

        <GetTicketButton />
      </div>
    </div>
  );
};
