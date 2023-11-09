import Image from "next/image";
import React from "react";
import HappyPeople from "https://images.pexels.com/photos/6210512/pexels-photo-6210512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
import Tickets from "https://images.pexels.com/photos/17527817/pexels-photo-17527817/free-photo-of-tickets-text-on-yellow-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const About = () => {
  return (
    <>
      <div className="text-center py-20">
        <p>About Heart To Plate</p>
        <p>
          The most unique food tasting experience with heart to plate buddies
        </p>
      </div>

      <section>
        <div className="h-auto w-[18rem] rounded-lg border overflow-hidden">
          <Image
            src={HappyPeople}
            width={1260}
            height={750}
            alt="happy people"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id maxime
            sed, perferendis quo quidem fugit sunt, obcaecati eligendi atque
            magnam consectetur voluptatem ab ipsam corrupti sint aut, eos beatae
            necessitatibus?
          </p>
        </div>
      </section>

      <section>
        <div className="px-8 py-4 bg-purple-500 text-white rounded-md">
          <p>Buy Tickets</p>
        </div>
      </section>

      <section>
        <div className="h-20 w-full rounded-lg border overflow-hidden">
          <Image
            src={Tickets}
            width={1260}
            height={750}
            alt="tickets"
            layout="responsive"
            objectFit="cover"
            objectPosition="center top"
          />
        </div>
      </section>
    </>
  );
};

export default About;
