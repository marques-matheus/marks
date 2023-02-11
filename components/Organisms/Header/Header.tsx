import Nav from 'components/Molecules/Nav';
import Image from 'next/image';
import React from 'react';
import { HeaderStyle } from './style';
export default function Header() {
  return (
    <header className='bg-white py-5 px-16 justify-around flex flex-row items-center'>
       <Image src="/logo-dark.png" alt="Next.js Logo" width={130} height={37} priority />
       <Nav />
    </header>
  );
}