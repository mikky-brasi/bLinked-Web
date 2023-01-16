import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import {
  agentsMenu,
  feedbackMenu,
  homeMenu,
  logoutMenu,
  orderMenu,
  settingMenu,
} from "../../public/img";
import bLinkedLogo from "../../public/landing/bLinkedLogo.svg";

type SidebarProps = {
  activeSidebar: boolean;
  setActiveSidebar: (activeSidebar: boolean) => void;
};

const Sidebar = ({ activeSidebar, setActiveSidebar }: SidebarProps) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const router = useRouter();

  const handleClick = (menuItem: string) => {
    setActiveSidebar(!activeSidebar);
    router.push(`/${menuItem}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/");
  };

  useEffect(() => {
    setActiveMenu(router.pathname.substring(1));
  }, [router.pathname]);

  return (
    <div className={!activeSidebar ? "" : "sidebar-bg"}>
      <div className={!activeSidebar ? "sidebar-main" : "sidebar-main active"}>
        <div
          className="mt-5 position-relative sidebar-logo"
          style={{ cursor: "pointer" }}
        >
          <Image
            src={bLinkedLogo}
            alt="Logo"
            className="img-fluid"
            style={{ margin: "-12rem 0", maxHeight: "150px" }}
            onClick={() => router.push("/home")}
          />
          <div
            onClick={() => setActiveSidebar(!activeSidebar)}
            className="d-flex d-md-none"
          >
            <MdClose />
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="mt-5">
            <li
              className={activeMenu === "home" ? "active" : ""}
              onClick={() => handleClick("home")}
            >
              <div>
                <span>
                  <Image src={homeMenu} alt="Home" className="img-fluid" />
                </span>
                <span>Home</span>
              </div>
            </li>

            <li
              className={activeMenu === "orders" ? "active" : ""}
              onClick={() => handleClick("orders")}
            >
              <div>
                <span>
                  <Image src={orderMenu} alt="Order" className="img-fluid" />
                </span>
                <span>Orders</span>
              </div>
              <div>1</div>
            </li>
            <li
              className={activeMenu === "feedback" ? "active" : ""}
              onClick={() => handleClick("feedback")}
            >
              <div>
                <span>
                  <Image
                    src={feedbackMenu}
                    alt="Feedback"
                    className="img-fluid"
                  />
                </span>
                <span>Feedback</span>
              </div>
            </li>
            <li
              className={activeMenu === "agents" ? "active" : ""}
              onClick={() => handleClick("agents")}
            >
              <div>
                <span>
                  <Image src={agentsMenu} alt="Agent" className="img-fluid" />
                </span>
                <span>Agents</span>
              </div>
            </li>
            <li
              className={activeMenu === "settings" ? "active" : ""}
              onClick={() => handleClick("settings")}
            >
              <div>
                <span>
                  <Image
                    src={settingMenu}
                    alt="Setting"
                    className="img-fluid"
                  />
                </span>
                <span>Settings</span>
              </div>
            </li>
            <li onClick={handleLogout}>
              <div>
                <span>
                  <Image src={logoutMenu} alt="Logout" className="img-fluid" />
                </span>
                <span>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
