"use client"
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import stayIcon from "../../../../public/Home/bIcon2.png";
import flightIcon from "../../../../public/Home/bIcon1.png";
import Logo from "../../../../public/Logo.png";
import Filter from '@/components/Filter';
import CheckboxFilter from '@/components/CheckboxFilter';
import GenericCard from '@/components/GenericCard';
import Footer from '@/components/Footer';
import { useFetch } from '@/Data/Fetchs';
import Spinner from '@/components/Spinner/Spinner';

const airlines = [
    "Emirated",
    "Fly Dubai",
    "Qatar",
    "Etihad"
];
const page = () => {
    const { data, isPending, error } = useFetch("http://localhost:8000/flights");
    const [filtredProducts, setFilteredProducts] = useState(data);
    const [value, setValue] = useState<number>(200);
    useEffect(() => {
        setFilteredProducts(data)
    }, [data]);
    useEffect(() => {
        setFilteredProducts(data?.filter((product: any) => product.price < value))
    }, [value]);
    const handleClick = () => {
        setFilteredProducts(data);
    }
    return (
        <div className='flex flex-col bg-[#fafbfcff]'>
            <Header
                logo={Logo}
                stayIcon={stayIcon}
                flightIcon={flightIcon}
                bgColor="white"
                color="black"
            />
            <div className='flex flex-col sm:flex-row justify-center items-start m-4 mb-20'>
                <div className='w-1/4 p-8 flex gap-4 flex-row sm:flex-col'>
                    <h1 className='text-2xl font-bold'>Filters</h1>
                    <Filter title="Price" value={value} setValue={setValue} handleClick={handleClick} />
                    <CheckboxFilter checkboxs={airlines} title="Airlines" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    {isPending ? (
                        <Spinner />
                    ) : (
                        filtredProducts?.map((airline: any) => (
                            <GenericCard
                                key={airline?.id}
                                image={airline?.image}
                                rate={airline?.rate}
                                id={airline?.id}
                                price={airline?.price}
                                reviewsNumber={airline?.reviewsNumber}
                                departureTime={airline?.departureTime}
                                arrivalTime={airline?.arrivalTime}
                            />
                        ))
                    )}

                </div>
            </div>
            <Footer />
        </div >
    )
}

export default page;