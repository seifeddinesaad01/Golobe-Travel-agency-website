import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImCross } from "react-icons/im";
import "../Header/header.css";
import { usePathname } from 'next/navigation';
import MenuDropDown from '../Dropdown';
import { useFetch } from '@/Data/Fetchs';
import useWindowSize from '@/lib/useWindowSize';
const Header = ({ bgColor, logo, color, flightIcon, stayIcon }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const token = localStorage.getItem("userToken");
  const navLinks = [
    {
      name: "Find flight", href: "/find-flight", icon: flightIcon
    },
    {
      name: "Find stay", href: "/find-stay", icon: stayIcon
    }
  ]
  const user = useFetch("http://localhost:8000/me");
  const { width } = useWindowSize();
  return (
    <header style={{
      background: bgColor,
      color: color
    }}
      className="text-white p-6 flex items-center justify-between ">
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
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href)
          return <Link
            href={link.href}
            className={isActive ? 'border-b-4 border-green-300 flex items-center justify-center gap-1' : `border-b-4 border-transparent flex items-center justify-center gap-1`}
          >
            <Image src={link.icon} alt="icon" />
            <span className="hidden md:inline">{link.name}</span>
          </Link>
        })}
      </div>
      {/* Logo */}
      <div>
        <Link href="/home">
          <Image alt="Golobe" src={logo} />
        </Link>
      </div>
      {/* Login and signUp buttons */}
      {!token ?
        <>
          {width && width > 700 && <div
            className='flex items-center justify-center gap-2'>
            <Link href="/sign-in"> <button className='p-2'>Login</button></Link>
            <Link href="/sign-up"> <button className='py-2 px-4 bg-black text-white border-solid-2 rounded-lg'>Sign Up</button></Link>
          </div>}
        </>
        : <MenuDropDown user={user} />}
      {/* Menu for small screens */}
      <div
        className={!isMenuOpen ? "drawer" : 'hiddenDrawer'}
      >
      
        <ImCross onClick={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
