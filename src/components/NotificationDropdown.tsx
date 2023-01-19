import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "./CustomToggle";
import { notificationIcon, NoNotificationsIcon } from "../../public/img";
import Image from "next/image";
import styles from "./NotificationDropdown.module.scss";

export default function NotificationDropdown() {
    const [
        notifications,
        // setNotifications
    ] = useState([]);

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <Image src={notificationIcon} alt="Bell" className={styles.bell} />
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.body}>
                {notifications.length > 0 ? (
                    <>
                        <Dropdown.Item>Notification 1</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Notification 2</Dropdown.Item>
                    </>
                ) : (
                    <>
                        <Dropdown.Header className={styles.header}>
                            <h4>Your notifications</h4>
                        </Dropdown.Header>

                        <Image
                            src={NoNotificationsIcon}
                            alt="No notification"
                            className={styles.image}
                        />

                        <p className={styles.text}>You{"'"}ve no notifications 🎉</p>
                        <p className={styles.subtext}>When you have one, they will appear here</p>
                    </>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}
