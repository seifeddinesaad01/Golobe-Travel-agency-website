"use client"
import React, { useState } from 'react'
import { Slider } from 'antd';

const Filter = () => {
    const [value, setValue] = useState<number>(50);
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor="rangeInput">Price:</label>
            <Slider
                range={{ draggableTrack: true }}
                defaultValue={[50, 1500]}
                min={50}
                max={1500}
                onChange={(value: any) => setValue(value)}
            />
            <p>{value.toString().substring(0, 3)} |{value.toString().substring(4)}</p>
        </div>
    );
};


export default Filter;