import Link from 'next/link';
import { SocialIcons } from '../social-icons';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import { Contact } from '../contact';

export const Footer = () => {
  return (
    <div className="bg-[#FFE3B1] p-6">
      <Contact />
      <div className="flex gap-8 justify-center mt-4 mb-7">
        <a className="text-sm text-[#64325B] font-medium" href="/">
          Home
        </a>
        <a className="text-sm text-[#64325B] font-medium" href="/about">
          About us
        </a>
        <a className="text-sm text-[#64325B] font-medium" href="/event">
          Events
        </a>
        <a className="text-sm text-[#64325B] font-medium" href="/tickets">
          Tickets
        </a>
      </div>

      <div className="flex justify-center mb-6">
        <SocialIcons />
      </div>

      <div className="flex gap-2 items-center justify-center">
        <Image src={Logo} className="h-20 w-20" alt="logo" />

        <div className="">
          <p className="text-[#64325B]">+234 808 661 9469</p>
          <p className="text-[#64325B]">hello@efeosasignatures.com</p>
        </div>
      </div>
    </div>
  );
};
