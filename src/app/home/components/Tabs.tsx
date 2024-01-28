"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface Tab {
  id: number;
  label: string;
  content: React.ReactNode;
  icon:any;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || 0);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer px-4 py-2 flex gap-2 ${
              activeTab === tab.id ? 'border-b-4 border-green-300' : 'border-b-4 border-white'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <Image src={tab?.icon} alt='icon'/>
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default Tabs;
