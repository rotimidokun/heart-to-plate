import Image from 'next/image';
import MyStory from '../../../public/my-story.png';
import { FounderImageEllipse } from '@/assets/founder-image-ellipse';
import { NavigateToSection } from '../navigate-section-button';

export const About = () => {
  return (
    <div id="about">
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
          <NavigateToSection text="Get Tickets" href="#tickets" />
        </div>

        <div className="flex flex-col justify-center items-center relative bg-[#FFF4EA] px-6 mt-14">
          <FounderImageEllipse className="w-[90%]" />

          <div className="flex flex-col justify-center items-center pt-4">
            <p className="text-[#8D337E] text-base font-medium">CEO</p>
            <p className="text-lg">EFEOSA SIGNATURES</p>
          </div>
        </div>
      </div>
    </div>
  );
};
