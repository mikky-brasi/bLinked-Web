import classNames from "classnames";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type DashboardProps = {
    children: React.ReactNode;
    title: string;
    // TODO: delete this prop after the new fonts are applied to all pages.
    useOldFonts?: boolean;
};

const Dashboard = ({ children, title, useOldFonts }: DashboardProps) => {
    const [activeSidebar, setActiveSidebar] = useState(false);
    return (
        <div className={classNames("dashboard-main", useOldFonts && "apply-old-fonts")}>
            <div className="d-flex justify-content-end">
                <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />
                <div className="dashboard-container pb-4">
                    <Header title={title} handleSideBar={() => setActiveSidebar(!activeSidebar)} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
