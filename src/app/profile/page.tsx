"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import Logo from "../../../public/Logo.png";
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import Footer from '@/components/Footer';
import Main from './components/Main';

const page = () => {
    return (
        <div className='flex flex-col'>
            <Header logo={Logo} bgColor="#fff" color="black" flightIcon={flightIcon} stayIcon={stayIcon} />
            <Main />
            <Footer />
        </div>
    )
}

export default page