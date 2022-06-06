import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { clearTimeout } from "timers";

const DashboardHeader = () => {
  const timelineMenuRef = useRef(null);

  const router = useRouter();

  const [actualDate, setActualDate] = useState(new Date())

  useEffect(() => {

    const id = setInterval(() => {
      setActualDate(new Date())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const navigationItems = [
    {
      name: "Home",
      link: "/",
      icon: <Icon icon={"ep:home-filled"} />,
    },
    {
      name: "My courses",
      link: "/courses/my",
      icon: <Icon icon={"ep:management"} />,
    },
    {
      name: "Library",
      link: "/library",
      icon: <Icon icon={"ep:menu"} />,
    },
  ];

  return (
    <div>
      <div className="w-full bg-[#fdfdfd] h-16 px-4 text-white font-semibold flex items-center justify-between">
        <div className="w-full h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-grow flex items-center h-full">
              <ul className="flex h-full">
                {navigationItems.map((navItem, i) => (
                  <li
                    className="cursor-pointer hover:text-white h-full px-10 flex items-center"
                    key={`nav-item-header-${i}`}
                    onClick={() => router.push(navItem.link)}
                  >
                    <p className="flex gap-2 leading-3 items-center font-light">
                      {navItem.icon} {navItem.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#fdfdfd] shadow-sm m-4 rounded-md h-full">
              <div
                ref={timelineMenuRef}
                className="px-4 py-3 border-x border-[#efefef] flex gap-4 h-full items-center"
              >
                <p className="font-light">{actualDate.toISOString().split("T")[0]}</p>
                <p className="leading-0">{actualDate.getHours()}:{actualDate.getMinutes()}:{actualDate.getSeconds()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#eee]" />
    </div>
  );
};

export default DashboardHeader;
