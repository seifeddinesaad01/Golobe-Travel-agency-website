import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';
import profileIcon from "../../public/Home/profile.png";
import settingsIcon from "../../public/Home/Settings.png";
import LogoutIcon from "../../public/Home/Logout.png";
import Link from 'next/link';
import { LogOutIcon } from 'lucide-react';
const items: MenuProps['items'] = [
    {
        label: <Link href="/profile" className='flex items-center justify-start gap-2'><Image src={profileIcon} alt="icon" /> <p>Profile</p></Link>,
        key: '0',
    },
    {
        label: <Link href="/settings" className='flex items-center justify-start gap-2'><Image src={settingsIcon} alt="icon" /> <p>Settings</p></Link>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <Link href="/Logout" className='flex items-center justify-start gap-2'><Image src={LogoutIcon} alt="icon" /> <p>Logout</p></Link>,
        key: '2',
    },

];

export const MenuDropDown = ({ user }: any) => {
    console.log(user)
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