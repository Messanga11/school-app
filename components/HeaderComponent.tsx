import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTranslation } from "../utils/hooks"
import HeaderLink from "./HeaderLink";
import { useRouter } from "next/router";
import Button from '@/components/basics/Button';

interface Props {
  school?: boolean
}

function HeaderComponent({school}:Props) {

  // Hooks
  const t = useTranslation()
  const router = useRouter()

  // Consts
  const middleItems = [
    {
      label: "School",
      link: "/schools"
    },
    {
      label: "University",
      link: "/university"
    },
  ]

  // State
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("token"))
  }, [])

  return (
    <header className="-ml-4 z-40 bg-gray-50 py-4 shadow-sm">
      <div className="flex items-center mx-auto w-full justify-between max-w-6xl max-auto px-10">
        {/* Left */}
        <div className="flex items-center gap-8 w-full max-w-xs">
          <p className="font-bold text-4xl text-black cursor-pointer" onClick={() => router.push("/")}>US</p>
          <Button color="info" onClick={() => router.push("/about")}>
            About
          </Button>
        </div>
        {/* Middle */}
        <ul className="flex-grow flex -ml-20 justify-center items-center gap-6">
          {middleItems.map((item, i) => (
            <li key={`middle-menu-nev-${i}`}>
              <Button color="dark" onClick={() => router.push(item.link)}className="font-semibold" >{item.label}</Button>
            </li>
          ))}
        </ul>
        {/* Right */}
        <div className="flex items-center space-x-6">
          <Button color="info" onClick={() => router.push(isLogged ? school ? "schools/administration" : "/dashboard" : school ? "/schools/login" : "/login")}>
            {isLogged ? "Dashboard" : "Login"}
          </Button>
          <Button onClick={() => router.push(school ? "/schools/create" : "/guardian/login")}>
            {school ? "Create school" : "Guardian"}
          </Button>
          {/* {!isLogged && <Button color="secondary" onClick={() => router.push("/guardian/login")}>
            Guardian
          </Button>} */}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
