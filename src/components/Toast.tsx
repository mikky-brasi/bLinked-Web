import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalState";
import { AlertImage1, AlertImage2 } from "../../public/img";
import Image from "next/image";
import styles from "./Toast.module.scss";
import classNames from "classnames";

export default function Toast() {
    const {
        toastData: { open, text, color },
        setToastData,
    } = useGlobalContext();

    useEffect(() => {
        if (!open) return;

        setTimeout(() => {
            setToastData({ open: false, text: "", color: "" });
        }, 3000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <div
            className={classNames(styles.toast, open && styles.open)}
            style={{ backgroundColor: color }}
        >
            <div className={styles["image-bg"]}>
                <Image src={AlertImage1} alt="" />
                <Image src={AlertImage2} alt="" />
            </div>
            <p>{text}</p>
        </div>
    );
}
