import React, { useState } from "react";
// Icons
import { BsGridFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { GoChevronDown } from "react-icons/go";
import { ImSearch } from "react-icons/im";
// Components
import { Dropdown } from "react-bootstrap";
import RatingCard from "../components/RatingCard";
import PendingOrder from "../components/PendingOrder";
import MapComponent from "../components/Map";
import Table, { HomeItem } from "../components/Table";
import Dashboard from "../components/Dashboard";
import { CustomToggle } from "../components/CustomToggle";
import DateDropdown from "../components/DateDropdown";
// Data
import order from "../mockData/pending_order.json";
// Assets
import { orderEmpty } from "../../public/img";
// Helpers
import OrderDetailsModal from "../components/OrderDetailsModal";
import Image from "next/image";
import { withAuthRequired } from "../hocs/withAuthRequired";
import dashboardStyles from "../components/Dashboard.module.scss";
import commonStyles from "../components/common.module.scss";
import classNames from "classnames";
import styles from "../styles/pages/Home.module.scss";

const HomePage = () => {
    // const ref = useRef(null);
    const [activeView, setActiveView] = useState("grid");
    // const [showInfoWindow, setShowInfoWinidow] = useState(false);
    const [show, setShow] = useState(false);
    const [
        ,
        // selected
        setSelected,
    ] = useState<HomeItem | null>(null);
    // const [target, setTarget] = useState(null);
    // const [selectPlace, setSelectPlace] = useState({});
    const from = new Date();
    from.setMonth(new Date().getMonth() - 1);
    const [fromDate, setFromDate] = useState(from);
    const [toDate, setToDate] = useState(new Date());
    const [
        orders,
        // setOrders
    ] = useState(order);
    const [search, setSearch] = useState("");
    // const [status, setStatus] = useState("All");
    // const [searchFromDate, setSearchFromDate] = useState(from);
    // const [searchToDate, setSearchToDate] = useState(new Date());

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    // const handleClick = (event) => {
    //   setShow(!show);
    //   setTarget(event.target);
    // };

    // const handleMouseOver = (e) => {
    //   setShowInfoWindow(true);
    //   console.log("enter");
    // };

    // const handleMouseExit = (e) => {
    //   setShowInfoWindow(false);
    //   console.log("exit");
    // };

    // const handleClickMarker = () => {
    //   setShowInfoWindow(!showInfoWindow);
    // };

    return (
        <Dashboard title="Home">
            <div className={dashboardStyles.mainContainer}>
                <div className="dashboard-subcontainer px-md-4 px-2 mt-4">
                    <div>
                        <div className={styles.dashboardTitle}> Welcome back, Assurance 🌤</div>
                        <div className={classNames(styles.subtitle, "mt-2")}>
                            <div className={styles.tagLine}>
                                Here is what{"'"}s happening with your business today!
                            </div>
                            <DateDropdown
                                fromDate={fromDate}
                                setFromDate={setFromDate}
                                toDate={toDate}
                                setToDate={setToDate}
                                fullWidthOnMobile
                            />
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 pt-4 pb-4">
                    <div className={dashboardStyles.totalRatingContainer}>
                        <div className="row px-md-4 px-2 py-4">
                            <div className="col-lg-4 px-md-3">
                                <RatingCard
                                    title="Total Orders"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
                                <RatingCard
                                    title="Transactions"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-4 px-md-3 mt-md-0 mt-4">
                                <RatingCard
                                    title="Performance"
                                    total="32,400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 pb-4">
                    <div className={classNames(styles.pendingOrdersContainer, "p-md-4 p-2")}>
                        <div className="d-md-flex justify-content-between">
                            <Dropdown className="d-inline mx-2 border-0">
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                                    <div className={styles.pendingOrdersTitle}>
                                        <span>Pending Orders (0)</span>
                                        <span>
                                            <GoChevronDown />
                                        </span>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="p-2">
                                    <Dropdown.Item
                                        className={classNames(
                                            commonStyles.dropdownMenuItem,
                                            "py-3",
                                        )}
                                    >
                                        Pending Orders (0)
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className={classNames(
                                            commonStyles.dropdownMenuItem,
                                            "py-3",
                                        )}
                                    >
                                        New Orders (0)
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-md-flex">
                                <div
                                    className={classNames(
                                        styles.pendingSearchInput,
                                        "mt-3 mt-md-0 mb-2 mb-md-0",
                                    )}
                                >
                                    <span>
                                        <ImSearch size={15} color="#A3A3C2" />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search orders e.g, ID"
                                        value={search}
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div
                                        className={classNames(
                                            styles.homePendingVertical,
                                            "mx-3 d-md-block d-none",
                                        )}
                                    />
                                    <div className="d-flex">
                                        <div
                                            className={classNames(
                                                styles.pendingOrderGridView,
                                                activeView === "grid" && styles.active,
                                            )}
                                            onClick={() => setActiveView("grid")}
                                        >
                                            <BsGridFill color="#0F112B" size={20} />
                                        </div>
                                        <div
                                            className={classNames(
                                                styles.pendingOrderListView,
                                                activeView === "list" && styles.active,
                                            )}
                                            onClick={() => setActiveView("list")}
                                        >
                                            <FcMenu size={22} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {activeView === "grid" ? (
                            <div className={styles.gridContainer}>
                                {orders.length > 0 ? (
                                    <div className="row">
                                        {orders
                                            .filter((order) => order.status === "New")
                                            .map((item, i) => (
                                                <div className="col-lg-4 mt-3" key={i}>
                                                    <PendingOrder
                                                        item={item}
                                                        setShow={setShow}
                                                        setSelected={setSelected}
                                                    />
                                                </div>
                                            ))}
                                    </div>
                                ) : (
                                    <div className="row py-3">
                                        <div className={classNames(styles.empty, "col-12 py-5")}>
                                            <div>
                                                <Image
                                                    src={orderEmpty}
                                                    alt="No Order"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="mt-3">
                                                You have no pending orders yet!
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={styles.listContainer}>
                                <Table
                                    items={orders.filter((order) => order.status === "New")}
                                    page="home"
                                    setShow={setShow}
                                    setSelected={setSelected}
                                />
                            </div>
                        )}
                        <div className={classNames(styles.loadMoreBtn, "mt-5 mb-3")}>
                            <button>Load more orders</button>
                        </div>
                    </div>
                </div>

                <MapComponent />

                <OrderDetailsModal show={show} setShow={setShow} itemStatus="New" />
            </div>
        </Dashboard>
    );
};

export default withAuthRequired(HomePage);
