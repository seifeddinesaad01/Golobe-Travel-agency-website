"use client"
import React, { useState } from 'react'
import { Slider } from 'antd';

const Filter = ({ title }: any) => {
    const [value, setValue] = useState<number>(50);
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="rangeInput" className='font-bolder text-xl'>{title}:</label>
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