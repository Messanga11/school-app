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

function HeaderComponent() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("token"))
  }, [])



  const router = useRouter()

  return (
    <header className="-ml-4 z-40 bg-gray-50 py-1.5 focus-within:shadow-lg">
      <div className="flex items-center mx-auto w-full justify-between max-w-6xl max-auto px-10">
        {/* Left */}
        <div className="flex items-center space-x-2 w-full max-w-xs">
          <p className="font-bold text-4xl text-black cursor-pointer" onClick={() => router.push("/")}>US</p>
        </div>
        {/* Right */}

        <div className="flex items-center space-x-6">
          <Button className="bg-purple-500" onClick={() => router.push(isLogged ? "/dashboard" : "/login")}>
            {isLogged ? "Dashboard" : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
