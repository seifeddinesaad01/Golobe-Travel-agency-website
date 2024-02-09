import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const CheckboxFilter = () => {
    const checkboxs = [
        "Emirated",
        "Fly Dubai",
        "Qatar",
        "Etihad"
    ];
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold'>Airlines</h2>
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