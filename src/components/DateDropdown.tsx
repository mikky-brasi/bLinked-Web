import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "./CustomToggle";
import { GoChevronDown } from "react-icons/go";
import { calenderIcon } from "../../public/img";
import { DateRangePicker } from "react-date-range";
import Image from "next/image";
import commonStyles from "./common.module.scss";
import classNames from "classnames";
import styles from "./DateDropdown.module.scss";

type DateDropdownProps = {
    fromDate: Date;
    setFromDate: (value: Date) => void;
    toDate: Date;
    setToDate: (value: Date) => void;
    fullWidthOnMobile?: boolean;
};

export default function DateDropdown({
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    fullWidthOnMobile,
}: DateDropdownProps) {
    const lastMoth = new Date();
    lastMoth.setDate(lastMoth.getDate() - 28);
    const [title, setTitle] = useState("Last 28 days");
    const [range, setRange] = useState(
        `${lastMoth.toDateString().substring(4)} - ${new Date().toDateString().substring(4)}`,
    );
    const [isCustom, setIsCustom] = useState(false);

    return (
        <Dropdown className={"d-inline mx-2 border-0 clearfix"} alignRight={true}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                <div
                    className={classNames(
                        styles.date,
                        "mt-md-0 mt-4 shadow-sm",
                        fullWidthOnMobile && styles.fullWidthOnMobile,
                    )}
                >
                    <div className="d-flex align-items-center">
                        <Image src={calenderIcon} alt="Calender" className="img-fluid" />
                        <div className="mx-2">{range}</div>
                    </div>

                    <div>
                        <GoChevronDown size={18} />
                    </div>
                </div>
            </Dropdown.Toggle>

            {!isCustom ? (
                <Dropdown.Menu className={"p-2"}>
                    <Dropdown.Item className={commonStyles.dropdownMenuItem}>
                        <div className={styles.dateItem}>
                            <span>{title}</span>
                            <span>{range}</span>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        className={commonStyles.dropdownMenuItem}
                        onClick={() => {
                            setTitle("Today");
                            setRange(new Date().toDateString().substring(4));
                        }}
                    >
                        Today
                    </Dropdown.Item>
                    <Dropdown.Item
                        className={commonStyles.dropdownMenuItem}
                        onClick={() => {
                            const lastWeek = new Date();
                            lastWeek.setDate(lastWeek.getDate() - 7);
                            setRange(
                                `${lastWeek.toDateString().substring(4)} - ${new Date()
                                    .toDateString()
                                    .substring(4)}`,
                            );
                            setTitle("Last 7 days");
                        }}
                    >
                        Last 7 days
                    </Dropdown.Item>
                    <Dropdown.Item
                        className={commonStyles.dropdownMenuItem}
                        onClick={() => {
                            const lastMoth = new Date();
                            lastMoth.setDate(lastMoth.getDate() - 28);
                            setRange(
                                `${lastMoth.toDateString().substring(4)} - ${new Date()
                                    .toDateString()
                                    .substring(4)}`,
                            );
                            setTitle("Last 28 days");
                        }}
                    >
                        Last 28 days
                    </Dropdown.Item>
                    <Dropdown.Item
                        className={commonStyles.dropdownMenuItem}
                        onClick={() => {
                            const last90Days = new Date();
                            last90Days.setDate(last90Days.getDate() - 90);
                            setRange(
                                `${last90Days.toDateString().substring(4)} - ${new Date()
                                    .toDateString()
                                    .substring(4)}`,
                            );
                            setTitle("Last 7 days");
                        }}
                    >
                        Last 90 days
                    </Dropdown.Item>
                    <p
                        className={commonStyles.dropdownMenuItem}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsCustom(true);
                            setTitle("Custom");
                        }}
                    >
                        Customize
                    </p>
                </Dropdown.Menu>
            ) : (
                <Dropdown.Menu className={classNames(styles.rangeContainer, "p-2")}>
                    <DateRangePicker
                        ranges={[
                            {
                                startDate: fromDate,
                                endDate: toDate,
                                color: "#3842b0",
                            },
                        ]}
                        focusedRange={[0, 0]}
                        weekStartsOn={1}
                        onChange={(e) => {
                            setFromDate(e.range1.startDate!);
                            setToDate(e.range1.endDate!);
                            setRange(
                                `${e.range1.startDate!.toDateString().substring(4)} - ${e.range1
                                    .endDate!.toDateString()
                                    .substring(4)}`,
                            );
                            setIsCustom(false);
                        }}
                    />
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
}
