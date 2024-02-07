import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">Profile</a>,
        key: '0',
    },

    {
        type: 'divider',
    },
    {
        label: <a href="https://www.aliyun.com">Logout</a>,
        key: '1',
    },

];

export const MenuDropDown: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <img src="https://i.ibb.co/vL7MPSV/113129314.jpg" alt="avatar" width="40" height={40} style={{
                    borderRadius:"50%"
                }}/>
                Seif eddine saad
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);

export default MenuDropDown;