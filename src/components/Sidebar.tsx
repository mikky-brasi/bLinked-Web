import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/router";
import {
    agentsMenu,
    feedbackMenu,
    homeMenu,
    logoutMenu,
    orderMenu,
    settingMenu,
} from "../../public/img";
import bLinkedLogo from "../../public/img/bLinkedLogo.svg";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

type SidebarProps = {
    activeSidebar: boolean;
    setActiveSidebar: (activeSidebar: boolean) => void;
};

const Sidebar = ({ activeSidebar, setActiveSidebar }: SidebarProps) => {
    const [activeMenu, setActiveMenu] = useState("home");

    const handleClick = (menuItem: string) => {
        setActiveSidebar(!activeSidebar);
        router.push(`/${menuItem}`);
    };

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        router.push("/");
    };

    useEffect(() => {
        setActiveMenu(router.pathname.substring(1));
    }, [router.pathname]);

    return (
        <div className={classNames(activeSidebar && styles.wrapper)}>
            <div className={classNames(styles.main, activeSidebar && styles.active)}>
                <div className={classNames(styles.logo, "mt-5 position-relative")}>
                    <Image
                        src={bLinkedLogo}
                        alt="Logo"
                        className="img-fluid"
                        style={{
                            margin: "-12rem 0",
                            maxHeight: "150px",
                            width: "auto",
                        }}
                        onClick={() => router.push("/home")}
                    />

                    <div
                        onClick={() => setActiveSidebar(!activeSidebar)}
                        className="d-flex d-md-none"
                    >
                        <MdClose />
                    </div>
                </div>

                <div className={styles.menu}>
                    <ul className="mt-5">
                        <li
                            className={classNames(activeMenu === "home" && styles.active)}
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
                            className={classNames(activeMenu === "orders" && styles.active)}
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
                            className={classNames(activeMenu === "feedback" && styles.active)}
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
                            className={classNames(activeMenu === "agents" && styles.active)}
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
                            className={classNames(activeMenu === "settings" && styles.active)}
                            onClick={() => handleClick("settings")}
                        >
                            <div>
                                <span>
                                    <Image src={settingMenu} alt="Setting" className="img-fluid" />
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
