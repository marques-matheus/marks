import Nav from "@/components/Molecules/Nav";
import NavMobile from "@/components/Molecules/MobileNav";
import {GiHamburgerMenu} from "react-icons/gi";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white py-5 px-8 lg:px-16 justify-between lg:justify-around flex w-full flex-row items-center fixed">
      <Image
        src="/logo-dark.png"
        alt="Next.js Logo"
        width={130}
        height={37}
        priority
      />
      <Nav />
      <NavMobile isOpen={isOpen}/>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden"><GiHamburgerMenu size={30} className="text-marks-200"/></button>

    </header>
  );
}
