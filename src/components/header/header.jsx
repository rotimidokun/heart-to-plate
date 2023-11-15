import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { SocialIcons } from "../social-icons";
import { CountDown } from "../countdown";
import Link from "next/link";
import { GetTicketButton } from "../get-ticket-button";

const Header = () => {
  return (
    <div>
      <div className="w-full h-[4.375rem] flex items-center justify-center gap-16 bg-[#F0F0F0]">
        <CountDown />
        <SocialIcons />
      </div>
      <nav className="text-xl text-green flex justify-between py-4 px-10 bg-white h-[5.625rem] items-center">
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

        <GetTicketButton />
      </nav>
    </div>
  );
};

export default Header;
