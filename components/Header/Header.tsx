import Image from 'next/image';
import React from 'react';
import { HeaderStyle } from './style';
export default function Header() {
  return (
    <HeaderStyle>
       <Image src="/logo-dark.svg" alt="Next.js Logo" width={180} height={37} priority />
    </HeaderStyle>
  );
}