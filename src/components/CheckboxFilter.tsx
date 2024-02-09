import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const CheckboxFilter = ({checkboxs,title}:any) => {
   
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className='flex flex-col gap-2 w-fit'>
            <h2 className='text-xl font-bold'>{title}</h2>
            {checkboxs?.map((checkboxs:any, index:any) => {
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