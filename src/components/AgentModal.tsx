import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { location } from "../../public/img";
import { getAgentStyle } from "../helpers/getRowStyles";
import styles from "./AgentModal.module.scss";

type AgentModalProps = {
    item: any;
    onClick: () => void;
};

export const AgentModal = ({ item, onClick }: AgentModalProps) => {
    return (
        <li className="d-md-flex justify-content-between" onClick={onClick}>
            <div className="d-flex align-items-center">
                <div className={styles.logo}>GO</div>
                <div className={styles.nameLoc}>
                    <span>{item.agentName}</span>
                    <span className="my-1">
                        <Image src={location} alt="" />
                        <span className="mx-1">{item.location}</span>
                    </span>
                    <div className="rounded-pill d-md-none d-flex">
                        <span
                            className={classNames(
                                styles.status,
                                "rounded-pill px-3  d-md-flex d-none",
                            )}
                            style={getAgentStyle(item.status)}
                        >
                            {item.status}
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <span
                    className={classNames(styles.status, "rounded-pill px-3  d-md-flex d-none")}
                    style={getAgentStyle(item.status)}
                >
                    {item.status}
                </span>
            </div>
        </li>
    );
};
