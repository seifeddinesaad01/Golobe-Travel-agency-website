import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import profileIcon from "../../public/Home/profile.png";
import settingsIcon from "../../public/Home/Settings.png";
import LogoutIcon from "../../public/Home/Logout.png";
import ActionLink from './ActionLink';
export const items: MenuProps['items'] = [
    {
        label: <ActionLink text='Profile' href="/profile" icon={profileIcon} />,
        key: '0',
    },
    {
        label: <ActionLink text='Settings' href="/settings" icon={settingsIcon} />,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <ActionLink text='Logout' href="/logout" icon={LogoutIcon} />,
        key: '2',
    },
];

export const MenuDropDown = ({ user }: any) => {
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()} className='cursor-pointer'>
                <Space>
                    <img src="https://i.ibb.co/vL7MPSV/113129314.jpg" alt="avatar" width="40" height={40} style={{
                        borderRadius: "50%"
                    }} />
                    {user?.data?.name}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
};

export default MenuDropDown;