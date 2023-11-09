import Image from "next/image";
import React from "react";
import logo from "../../../public/next.svg";

const Header = () => {
  return (
    <nav className="text-xl text-green flex justify-between p-4">
      <Image src={logo} width={40} height={40} alt="logo" />

      <div className="flex gap-2">
        <div className="text-xs py-1 px-2 bg-purple-400 rounded-md">
          Become a Vendor
        </div>
        <div className="text-xs py-1 px-2 bg-black text-white rounded-md">
          Buy Tickets
        </div>
      </div>
    </nav>
  );
};

export default Header;
