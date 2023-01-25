import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dashboard from "../components/Dashboard";
import SettingsChangePassword from "../components/ChangePassword";
import UserProfile from "../components/UserProfile";
import { withAuthRequired } from "../hocs/withAuthRequired";
import classNames from "classnames";
import styles from "../styles/pages/Settings.module.scss";

const SettingsPage = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [menu, setMenu] = useState("profile");

    const handleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <Dashboard title="General settings" useOldFonts>
            <div className="px-md-4 px-2 pb-4 mt-4">
                <div className={classNames(styles.settingsContainer, "h-100")}>
                    <div className={styles.menuContainer}>
                        <ul>
                            <li
                                className={menu === "profile" ? styles.active : ""}
                                onClick={() => {
                                    setMenu("profile");
                                }}
                            >
                                User profile
                            </li>
                            <li
                                className={menu === "changepassword" ? styles.active : ""}
                                onClick={() => setMenu("changepassword")}
                            >
                                Change password
                            </li>
                        </ul>
                    </div>
                    <div
                        className={classNames(
                            styles.formContainer,
                            menu === "teammember" && "w-100",
                        )}
                    >
                        <div
                            onClick={handleMenu}
                            className="d-flex d-lg-none pb-0 mt-3 justify-content-end"
                        >
                            <HiOutlineMenuAlt3 size={28} />
                        </div>
                        <div
                            className={classNames(styles.menuResponsiveContainer, "shadow-sm")}
                            style={{
                                height: !menuActive ? 0 : 255,
                            }}
                        >
                            <ul className="pt-4">
                                <li
                                    className={menu === "profile" ? styles.active : ""}
                                    onClick={() => {
                                        handleMenu();
                                        setMenu("profile");
                                    }}
                                >
                                    User profile
                                </li>
                                <li
                                    className={menu === "changepassword" ? styles.active : ""}
                                    onClick={() => {
                                        handleMenu();
                                        setMenu("changepassword");
                                    }}
                                >
                                    Change password
                                </li>
                            </ul>
                        </div>

                        {menu === "profile" ? <UserProfile /> : <SettingsChangePassword />}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default withAuthRequired(SettingsPage);
