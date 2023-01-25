import classNames from "classnames";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Dashboard.module.scss";

type DashboardProps = {
    children: React.ReactNode;
    title: string;
};

const Dashboard = ({ children, title }: DashboardProps) => {
    const [activeSidebar, setActiveSidebar] = useState(false);
    return (
        <div className={styles.wrapper}>
            <div className="d-flex justify-content-end">
                <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
                <div className={classNames(styles.container, "pb-4")}>
                    <Header title={title} handleSideBar={() => setActiveSidebar(!activeSidebar)} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
