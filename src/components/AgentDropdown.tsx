import classNames from "classnames";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./AgentDropdown.module.scss";

const AgentDropdownActions = ["Edit", "Suspend", "Remove"] as const;
type AgentDropdownAction = (typeof AgentDropdownActions)[number];

type AgentDropdownProps = {
    setShow: (show: boolean) => void;
    setModalAction: (action: AgentDropdownAction) => void;
    setShowDropdown: (show: boolean) => void;
};

export default function AgentDropdown({
    setShow,
    setModalAction,
    setShowDropdown,
}: AgentDropdownProps) {
    const handleClick = (action: AgentDropdownAction) => {
        setShow(true);
        setShowDropdown(false);
        setModalAction(action);
    };

    return (
        <div className={styles.wrapper}>
            <Dropdown.Item
                className={classNames(styles.menuItem, "py-3")}
                onClick={() => handleClick("Edit")}
                style={{ color: "#3842b0" }}
            >
                Edit Agent
            </Dropdown.Item>
            <Dropdown.Item
                className={classNames(styles.menuItem, "py-3")}
                onClick={() => handleClick("Suspend")}
            >
                Suspend Agent
            </Dropdown.Item>
            <Dropdown.Item
                className={classNames(styles.menuItem, "py-3")}
                onClick={() => handleClick("Remove")}
                style={{ color: "#F00" }}
            >
                Remove Agent
            </Dropdown.Item>
        </div>
    );
}
