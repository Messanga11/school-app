import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTranslation } from "../utils/hooks"
import HeaderLink from "./HeaderLink";
import { useRouter } from "next/router";
import Button from '@/components/basics/Button';
import Link from "next/link";

interface Props {
  school?: boolean;
  university?: boolean;
}

function HeaderComponent({school, university}:Props) {

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
    <Fragment>
      <nav className="bg-[#fff] shadow-md">
        <div className="container">
          <div>
            <span className="brand link-active">
              <Link href="/" passHref><span><span style={{color: "var(--primary)"}}>U</span><span style={{color: "var(--accent)"}}>S</span></span></Link>
            </span>
          </div>
          <ul>
            <li>
              <span className={(router.pathname.includes("/home") && !router.pathname.includes("/login" ))? "link-active" : ""}>
                <Link href="/home">Home</Link>
              </span>
            </li>
            <li>
              <span className={(router.pathname.includes("/about") && !router.pathname.includes("/login" ))? "link-active" : ""}>
                <Link href="/about">About</Link>
              </span>
            </li>
            {(router.pathname.includes("/university") || router.pathname.includes("/home")) && <li>
              <span className={(router.pathname.includes("/university") && !router.pathname.includes("/login" ))? "link-active" : ""}>
                <Link href="/university">University</Link>
              </span>
            </li>}
            {(router.pathname.includes("/schools") || router.pathname.includes("/home")) && <li>
              <span className={(router.pathname.includes("/schools" ) && !router.pathname.includes("/login" ))? "link-active" : ""}>
                <Link href="/schools">Schools</Link>
              </span>
            </li>}
            {router.pathname.includes("/schools" ) ? (
              <li>
                <span className={router.pathname.includes("/login" ) ? "link-active" : ""}>
                  <Link href={isLogged ? "/schools/administration" : "/schools/login"}>{isLogged ? "Dashboard" : "School login"}</Link>
                </span>
              </li>
              )
              : router.pathname.includes("/university" ) ? (
                <li>
                  <span className={router.pathname.includes("/login" ) ? "link-active" : ""}>
                    <Link href={isLogged ? "/university/administration" : "/university/login"}>{isLogged ? "Dashboard" : "University login"}</Link>
                  </span>
                </li>
              )
            : (
              !isLogged && (router.pathname === "/login" || router.pathname === "/home") && <li>
                <span className={router.pathname === "/login" ? "link-active" : ""}>
                  <Link href={isLogged ? "/dashboard" : "/login"}>{isLogged ? "Dashboard" : "Student login"}</Link>
                </span>
              </li>
              )}
            {!isLogged && (router.pathname === "/home" || router.pathname === "/guardian/login") && (
              <li>
                <span className={router.pathname.includes("/guardian/login") ? "link-active" : ""}>
                  <Link href="/guardian/login">Guardian login</Link>
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default HeaderComponent;
