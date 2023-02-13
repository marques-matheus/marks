import Nav from 'components/Molecules/Nav';
import Image from 'next/image';
import React from 'react';
import { HeaderStyle } from './style';
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='bg-white py-5 px-16 justify-around flex flex-row items-center'>
       <Image src="/logo-dark.png" alt="Next.js Logo" width={130} height={37} priority />
       <Nav open={isOpen} setOpen={setIsOpen} />
       <button className='bg-blue-500 lg:hidden' 
       onClick={() => setIsOpen(!isOpen)}
       >Menu</button>
    </header>
  );
}