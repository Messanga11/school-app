import React from 'react'

interface TabOption {
    id: string | number;
    title: string;
}

interface Props {
    tabs: TabOption[];
    activeTabId: string | number;
    setActiveTabId: Function;
}

const Tabs: React.FC<Props> = ({tabs, activeTabId, setActiveTabId}) => {
  return (
    <div className='flex mb-8'>
        {tabs.map(tab => (
            <button className={`px-10 py-2 border-b-2 ${(activeTabId === tab.id) ? "border-black" : "border-gray-600"}`} key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
            >
            <p>{tab.title}</p>
            </button>
        ))}
  </div>
  )
}

export default Tabs