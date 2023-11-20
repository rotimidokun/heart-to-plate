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
          <p className="text-[#64325B]">
            In 2019, I embarked on a journey to excel in the culinary arts,
            venturing into the cooking business. Focused on delivering
            exceptional meals to the working class, I began selling food on
            weekends while maintaining my 9-5 job.
            <br />
            <br />
            My passion for cooking propelled me to become one of the top MCZ
            food vendors in 2020. However, on February 15th, tragedy struck as I
            collapsed and was swiftly taken to the hospital. It was later
            revealed that I had a life-threatening heart condition, “a hole in
            the heart “ with only a few days left to live.
            <br />
            <br />
            A 50/50 challenging surgery took place on March 6th, 2021, lasting
            longer than anticipated at 5 hours instead of the expected 3.
            Following the procedure, I entered a 7-day coma, awakening to the
            devastating realization of paralysis on the left side of my body and
            partial memory loss. This setback forced the temporary closure of my
            business.
            <br />
            <br />
            Summoning courage alongside four professionals, I resumed operations
            on December 9th, 2022. Despite the daunting challenges, the joy of
            pursuing my passion for cooking made the journey worthwhile.
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
