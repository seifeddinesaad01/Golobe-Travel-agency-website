import React from 'react';
import { Radio } from 'antd';

interface CustomRadioProps {
    id: string;
    label?: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    text:string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
    id,
    label,
    value,
    checked,
    onChange,
    text,
}) => {
    return (
        <label htmlFor={id} className={`flex items-center justify-between gap-2 p-2 rounded-lg cursor-pointer ${checked ? 'bg-[#8ed4bbff]' : ''}`}>
            <div className="flex flex-col gap-2">
                <h1 className='text-lg font-bold'>{label}</h1>
                <p>{text}</p>
            </div>
            <Radio
                type="radio"
                id={id}
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
        </label>
    );
};

export default CustomRadio;
