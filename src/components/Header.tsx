import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";

import { ImSearch } from "react-icons/im";
import NotificationDropdown from "./NotificationDropdown";
import SearchModal from "./SearchModal";
import styles from "./Header.module.scss";

type HeaderProps = {
    handleSideBar: () => void;
    title: string;
};

const Header = ({ handleSideBar, title }: HeaderProps) => {
    const router = useRouter();
    const [show, setShow] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        router.push("/");
    };

    const showSearchModal = () => {
        setShow(true);
    };

    return (
        <div className={classNames(styles.wrapper, "px-md-4 px-2")}>
            <div className={styles.path}>
                <span onClick={handleSideBar} className="d-flex d-lg-none">
                    <CgMenuLeftAlt size={28} />
                </span>

                <span className="mx-2">{title}</span>
            </div>

            <div className={styles.account}>
                <div className={styles.search} onClick={showSearchModal}>
                    <ImSearch className={classNames(styles.searchIcon, "mx-2")} size={20} />
                    <span>Search</span>
                </div>

                <div className={styles.notification}>
                    <NotificationDropdown />
                </div>

                <Dropdown className="d-inline mx-2 border-0">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                        <div className={styles.accountTrigger}>
                            <div className={styles.accountContainer}>
                                <div className={styles.accountIcon}>BL</div>

                                <div
                                    className={classNames(
                                        styles.accountName,
                                        "d-flex align-items-center",
                                    )}
                                >
                                    <span className="d-none d-md-flex">Bamboo Lounge</span>
                                    <GoChevronDown size={18} />
                                </div>
                            </div>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-1">
                        <Dropdown.Item className={classNames(styles.profile, "py-3")}>
                            <div className={styles.accountIcon}>BL</div>
                            <div>
                                <span>Bamboo Lounge</span>
                                <span>Sales manager</span>
                            </div>
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item
                            className={styles.menuItem}
                            onClick={() => router.push("/settings")}
                        >
                            Profile
                        </Dropdown.Item>

                        <Dropdown.Item
                            className={styles.menuItem}
                            onClick={() => router.push("/settings")}
                        >
                            Support
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        <Dropdown.Item
                            className={classNames(styles.menuItem, styles.logout)}
                            onClick={handleLogout}
                        >
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {show && <SearchModal show={show} setShow={setShow} />}
        </div>
    );
};

export default Header;

type CustomToggleProps = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent) => void;
};

const CustomToggle = React.forwardRef<HTMLSpanElement, CustomToggleProps>(
    function CustomToggleRender({ children, onClick }, ref) {
        return (
            <span
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
            </span>
        );
    },
);
