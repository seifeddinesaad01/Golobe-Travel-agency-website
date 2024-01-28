"use client"
import React from 'react'
import '../(auth)/sign-in/signIn.css'
import Header from './components/Header'
import Tabs from './components/Tabs';
import stayIcon from "../../../public/Home/bIcon2.png";
import flightIcon from "../../../public/Home/bIcon1.png";
import { FlightTab } from './components/FlightTab';
import { StaysTab } from './components/StaysTab';
import TripCard from './components/TripCard';
import { trips } from '@/constants/data';
import TripDisplay from './components/TripDisplay';

const page = () => {
    const tabs = [
        { id: 1, label: 'Flights', content: <FlightTab />, icon: flightIcon },
        { id: 2, label: 'Stays', content: <StaysTab />, icon: stayIcon },
    ];



    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: "column", backgroundColor: "#FAFBFC", width: "100%" }}>
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
                width: "85%",
                alignSelf: "center",
                marginTop: "-6rem",
                padding: "1rem",
                borderRadius: "16px",
                marginBottom: "2rem"
            }}>
                <Tabs tabs={tabs} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: '85%',
                gap: "2.5rem",
                marginTop:"2.5rem"

            }}>
                <div style={{
                    alignSelf: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    gap: '0.3rem'
                }}>
                    <h1 style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}>Plan your perfect trip</h1>
                    <p style={{
                        fontSize: "1.2rem",
                        color: "gray"
                    }}>Search Flights & Places Hire to our most popular destinations</p>
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "2rem",
                        width: "100%"
                    }}>
                    {trips?.map((trip: any, index: any) => {
                        return <TripCard
                            tripImg={trip.tripImg}
                            title={trip?.title}
                            description={trip?.description}
                        />
                    })
                    }
                </div>
                <div style={{
                    display:"flex",
                    justifyContent: "center",
                    alignItems:"center", 
                    gap:"1rem",
                     marginTop:"2.5rem"
                }}>
                    <TripDisplay />
                    <TripDisplay />
                </div>

            </div>
        </div>
    )
}

export default page