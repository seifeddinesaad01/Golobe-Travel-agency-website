"use client"
import React from 'react'
import Header from '@/components/Header/Header'
import stayIcon from "../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../public/Home/bIcon1.png";
import Logo from "../../../../public/Logo.png";
import Filter from '@/components/Filter';
import CheckboxFilter from '@/components/CheckboxFilter';
import {  staysList } from '@/constants/data';
import Footer from '@/components/Footer';
import Card from '@/app/find-stay/components/Card';
import { useFetch } from '@/Data/Fetchs';
import Spinner from '@/components/Spinner/Spinner';

const airlines = [
    "Emirated",
    "Fly Dubai",
    "Qatar",
    "Etihad"
];
const trips = [
    "Round Trip",
    "On Way",
    "Multi-City",
    "My Dates Are Flexible"
]
const page = () => {
    const { data, isPending, error } = useFetch("http://localhost:8000/stays")
    return (
        <div className='flex flex-col bg-[#fafbfcff]'>
            <Header
                logo={Logo}
                stayIcon={stayIcon}
                flightIcon={flightIcon}
                bgColor="white"
                color="black"
            />
            
            <div className='flex flex-col sm:flex-row justify-between items-start m-4 mb-20 mt-20'>
                <div className='w-2/6 p-8 flex gap-4 flex-row sm:flex-col'>
                    <h1 className='text-2xl font-bold'>Filters</h1>
                    <Filter title="Price" />
                    <CheckboxFilter checkboxs={airlines} title="Airlines" />
                    <CheckboxFilter checkboxs={trips} title="Trips" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                {isPending ? (
                        <Spinner />
                    ) : (data?.map((hotel:any) => {
                        return <Card
                            image={hotel.image} 
                            id={hotel.id}
                            price={hotel.price}
                            rate={hotel.rate}
                            reviewsNumber={hotel.reviewsNumber}
                            location={hotel.location}
                            hotelName={hotel.hotelName}
                        />
                    }))}
                    <button className='w-full py-2 px-4 text-white bg-[#112111ff] rounded-md'>Show more results</button>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default page;