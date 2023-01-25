import classNames from "classnames";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styles from "./RatingCard.module.scss";

type RatingCardProps = {
    title: string;
    total: string;
    rating: string;
    desc: string;
};

const RatingCard = ({ title, total, rating, desc }: RatingCardProps) => {
    return (
        <div className={classNames(styles.wrapper, "p-4")}>
            <div className={styles.title}>{title}</div>
            <div className={classNames(styles.total, "mt-3")}>
                <span>{total}</span>
                <span>
                    ({rating})<AiOutlineArrowUp />
                </span>
            </div>
            <div className={classNames(styles.description, "mt-1")}>{desc}</div>
        </div>
    );
};

export default RatingCard;
