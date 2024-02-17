"use client"
import React, { useState } from 'react'
import { Slider } from 'antd';

const Filter = ({ title, value, setValue,handleClick }: any) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="rangeInput" className='font-bolder text-xl flex justify-between items-center'>
                <p> {title}:</p>
                <button
                onClick={handleClick}
                 className='bg-[#8ed4bbff] p-1 rounded-lg text-white'>Reset</button>
            </label>
            <Slider
                defaultValue={50}
                min={50}
                max={1500}
                onChange={(value: any) => setValue(value)}
                styles={{
                    track: {
                        background: '#8ed4bbff',
                    },
                    tracks: {
                        background: "red"
                    }
                }}
            />
            <div className='flex justify-between items-center'>
                <p>$50</p>
                <p>${value || '50'}</p>
                <p>$1500</p>
            </div>
        </div>
    );
};


export default Filter;