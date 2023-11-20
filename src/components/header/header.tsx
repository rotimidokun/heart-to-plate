'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import { SocialIcons } from '../social-icons';
import { HamBurger } from '../../assets/hamburger';
import { CountDown } from '@/components/countdown';
import Link from 'next/link';
import { GetTicketButton } from '../get-ticket-button';
import { X } from 'lucide-react';
import { NavigateToSection } from '../navigate-section-button';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenuAndNavigate = () => {
    setMenuOpen(false);
  };

  const BorderDivider = () => <div className="border-b border-[#8D337E]"></div>;

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="w-full flex items-center justify-center gap-16 bg-[#F0F0F0]">
        <CountDown />
      </div>

      {/* mobile fixed section */}

      {/* <div className="w-full h-[4.375rem] flex items-center justify-center gap-16 bg-[#F0F0F0]">
        <SocialIcons />
      </div> */}

      <nav className="hidden text-xl text-green justify-between py-4 px-10 bg-white h-[5.625rem] items-center">
        <div className="flex items-center gap-6">
          <Image src={logo} className="h-[4.375rem] w-[4.375rem]" alt="logo" />
          <p className="text-[#64325B] text-xl font-normal">
            EFEOSA SIGNATURES
          </p>
        </div>

        <div className="flex gap-11">
          <Link href="/" className="text-base text-[#8D337E] font-medium">
            Home
          </Link>
          <Link href="/about" className="text-base text-[#8D337E] font-medium ">
            About
          </Link>
          <Link href="/event" className="text-base text-[#8D337E] font-medium">
            Event
          </Link>
          <Link
            href="/contact"
            className="text-base text-[#8D337E] font-medium"
          >
            Contact Us
          </Link>
        </div>

        <GetTicketButton href="/" text="Get Tickets" />
      </nav>

      {/* mobile nav */}
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image src={logo} className="h-16 w-16" alt="logo" />
          <p className="text-[#64325B] text-base font-medium w-1/2 leading-4">
            EFEOSA SIGNATURES
          </p>
        </div>

        <div className="cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="h-10 w-10 rounded-full flex items-center justify-center border-[#8D337E] border-[1.5px]">
              <X stroke="#8D337E" />
            </div>
          ) : (
            <HamBurger className="h-6 w-6" />
          )}
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-white w-[70%] p-4 z-50 shadow-lg">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-base text-center text-[#8D337E] font-medium hover:dark:bg-gray-200 py-4 rounded-md"
                onClick={closeMenuAndNavigate}
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base text-center text-[#8D337E] font-medium hover:dark:bg-gray-200 py-4 rounded-md"
                onClick={closeMenuAndNavigate}
              >
                About
              </a>

              <a
                href="#merchandise"
                className="text-base text-center text-[#8D337E] font-medium hover:dark:bg-gray-200 py-4 rounded-md"
                onClick={closeMenuAndNavigate}
              >
                Merchandise
              </a>

              <a
                href="#contact"
                className="text-base text-center text-[#8D337E] font-medium hover:dark:bg-gray-200 py-4 rounded-md"
                onClick={closeMenuAndNavigate}
              >
                Contact Us
              </a>

              <NavigateToSection
                text="Get Tickets"
                href="#tickets"
                onClick={closeMenuAndNavigate}
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
