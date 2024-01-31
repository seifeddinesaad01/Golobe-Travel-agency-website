// components/Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/whiteLogo.png';
import stayIcon from '../../../../public/Home/icon1.png';
import flightIcon from '../../../../public/Home/icon2.png';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white p-6 flex items-center justify-between ">
      <div className="flex items-center space-x-4">
        {/* Hamburger menu icon for small screens */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        <Link href="/find-flight" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <Image src={flightIcon} alt="icon" />
          <span className="hidden md:inline">Find flights</span>
        </Link>
        <Link href="/find-stay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <Image src={stayIcon} alt="icon" />
          <p className="hidden md:inline">Find stays</p>
        </Link>
      </div>

      {/* Logo */}
      <div>
        <Link href="/">
          <Image alt="Golobe" src={Logo} />
        </Link>
      </div>

      {/* Menu for small screens */}
      <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <button className="px-4 py-2 rounded">
          <Link href="/sign-in">Login</Link>
        </button>
        <button style={{ color: 'black', borderRadius: '8px' }} className="bg-white px-6 p-3">
          <Link href="/sign-up">Sign up</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
