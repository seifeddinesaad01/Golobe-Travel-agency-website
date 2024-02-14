import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
interface IcheckboxFilter {
    checkboxs: string[];
    title: string
}
const CheckboxFilter = ({ checkboxs, title }: IcheckboxFilter) => {

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className='flex flex-col gap-2 w-fit'>
            <h2 className='text-xl font-bold'>{title}</h2>
            {checkboxs?.map((checkboxs, index) => {
                return <Checkbox
                    key={index}
                    onChange={onChange}
                    className='text-lg font-bolder'
                >{checkboxs}</Checkbox>
            })}
        </div>
    )
}

export default CheckboxFilter;