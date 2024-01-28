"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import Header from './components/Header'
import Tabs from './components/Tabs';
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import { Input } from '@/components/Input';
import { FlightTab } from './components/FlightTab';

const page = () => {
    const tabs = [
        { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
        { id: 2, label: 'Stays', content: <div>Content for Tab 2</div>, icon: stayIcon },
    ];
    return (
        <div style={{ display: 'flex', flexDirection: "column", backgroundColor: "#FAFBFC" }}>
            <div className='bgimage'>
                <Header />
                <div style={{
                    color: "#fff",
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <h2 style={{
                        fontSize: "2rem"
                    }}>Helping Others</h2>
                    <h1 style={{
                        fontSize: "4rem"
                    }}>Live & Travel</h1>
                    <p style={{
                        fontSize: "1.2rem"
                    }}>Socia offers to suit your plan</p>
                </div>

            </div>
            <div style={{
                backgroundColor: "#fff",
                height: "40vh",
                width: "80%",
                alignSelf: "center",
                marginTop: "-6rem",
                padding: "1rem",
                borderRadius: "16px"
            }}>
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}

export default page