import Image from 'next/image';
import Facebook from '../../public/facebook-icon.svg';
import Twitter from '../../public/twitter-icon.svg';
import LinkedIn from '../../public/linkedin-icon.svg';
import { Instagram } from 'lucide-react';

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <Image
        src={Facebook}
        className="h-[2.438rem] w-[2.438rem]"
        alt="facebook"
      />
      <Image
        src={Twitter}
        className="h-[2.438rem] w-[2.438rem]"
        alt="facebook"
      />
      <a
        href="https://www.instagram.com/efeosasignatures/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[2.438rem] w-[2.438rem] border-[1.5px] border-[#8D337E] border-opacity-[0.15] rounded-full flex items-center justify-center"
      >
        <Instagram stroke="#8D337E" size="1rem" />
      </a>
    </div>
  );
};
