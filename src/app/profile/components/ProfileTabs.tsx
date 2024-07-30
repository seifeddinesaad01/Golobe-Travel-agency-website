import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Account',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'History',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Payment methods',
    children: 'Content of Tab Pane 3',
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