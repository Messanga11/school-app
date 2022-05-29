import React from 'react'

interface TabOption {
    id: string | number;
    title: string;
}

interface Props {
    tabs: TabOption[];
    activeTabId: string | number;
    setActiveTabId: Function;
    count?: {[index:number]: number | undefined};
}

const Tabs: React.FC<Props> = ({tabs, activeTabId, setActiveTabId, count}) => {
  return (
    <div className='flex mb-8'>
        {tabs.map((tab, i) => (
            <button className={`flex gap-2 items-center px-10 py-2 border-b-2 ${(activeTabId === tab.id) ? "border-gray-600" : "border-[#eee]"}`} key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
            >
            <p>{tab.title}</p>
            {!!count?.[i] && (
                <span>
                    <span className='bg-red-500 text-white font-semibold w-6 h-6 flex justify-center items-center rounded-full text-sm text-center' style={{lineHeight: "1rem"}}>{count?.[i]}</span>
                </span>
            )}
            </button>
        ))}
  </div>
  )
}

export default Tabs