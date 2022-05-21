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

function HeaderComponent() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setIsLogged(!!localStorage.getItem("token"))
  }, [])



  const router = useRouter()

  return (
    <Fragment>
      <nav>
        <div className="container">
          <div>
            <span className="brand">
              <Link href="/">Aer</Link>
            </span>
          </div>
          <ul>
            <li>
              <span className={router.pathname === "/login" ? "link-active" : ""}>
                <Link href={isLogged ? "/dashboard" : "/login"}>{isLogged ? "Dashboard" : "Student login"}</Link>
              </span>
            </li>
            {!isLogged && (
              <li>
                <span className={router.pathname === "/guardian/login" ? "link-active" : ""}>
                  <Link href="/guardian/login">Guardian login</Link>
                </span>
              </li>
            )}
            <li>
              <span>
                <Link href="/" passHref>
                  <span className="material-icons-outlined">
                    search
                  </span>
                </Link>
              </span>
            </li>
          </ul>
          <div className="menu-btn">
            <span className="material-icons-outlined">
              segment
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default HeaderComponent;
