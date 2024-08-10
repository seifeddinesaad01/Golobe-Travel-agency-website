import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Account from './Account';
import History from './History';
import Payment from './Payment';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Account',
    children: <Account />,
  },
  {
    key: '2',
    label: 'History',
    children: <History />,
  },
  {
    key: '3',
    label: 'Payment methods',
    children: <Payment />,
  },
];

const ProfileTabs: React.FC = () => {
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#8dd3bb',
        borderRadius: 2,
        colorBgContainer: '#8dd3bb',
      },
    }}
  >
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      centered
      size='large'
      style={{
        width: "90%",
      }}

    />
  </ConfigProvider>
}

export default ProfileTabs;