import React from "react";
import { getOrderStyle } from "../helpers/getRowStyles";
import { BsThreeDots } from "react-icons/bs";
import { HomeItem } from "./Table";
import tableStyles from "./Table.module.scss";
import classNames from "classnames";
import styles from "./PendingOrder.module.scss";

type PendingOrderBoxProps = {
    item: HomeItem;
    setShow: (show: boolean) => void;
    setSelected: (order: HomeItem) => void;
};

const PendingOrderBox = ({ item, setShow, setSelected }: PendingOrderBoxProps) => {
    const { name, from, to, price, status } = item;
    return (
        <div className={classNames(styles.gridBox, "py-4")}>
            <div className="mb-5">
                <div className={styles.name}>
                    <span>{name}</span>
                    <span
                        className={tableStyles.threeDots}
                        onClick={() => {
                            setSelected(item);
                            setShow(true);
                        }}
                    >
                        <BsThreeDots color="#727E8F" size={23} />
                    </span>
                </div>
                <div className={classNames(styles.orderLoc, "mt-2")}>
                    <span>From {from} | 20 mins ago</span>
                    <span>To {to}</span>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <span className={styles.price}>₦{price}</span>
                <span
                    className={classNames(styles.status, "px-3 py-1 rounded-pill")}
                    style={getOrderStyle(status)}
                >
                    {status}
                </span>
            </div>
        </div>
    );
};

export default PendingOrderBox;
