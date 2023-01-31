import React, { useEffect, useState } from "react";
// Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
// Components
import RatingCard from "../components/RatingCard";
import Table from "../components/Table";
import OrderDetailsModal from "../components/OrderDetailsModal";
import Dashboard from "../components/Dashboard";
import FilterOrdersDropdown from "../components/FilterOrdersDropdown";
// Data
import order from "../mockData/orders.json";
// Helpers
import { filterOrders } from "../helpers/filterOrders";
import { withAuthRequired } from "../hocs/withAuthRequired";
import dashboardStyles from "../components/Dashboard.module.scss";
import orderStyles from "../styles/pages/Orders.module.scss";
import classNames from "classnames";

const OrdersPage = () => {
    const [show, setShow] = useState(false);
    const [itemStatus, setItemStatus] = useState("New");
    const [orders, setOrders] = useState(order);

    const [filter, setFilter] = useState("All");
    const [orderSearch, setOrderSearch] = useState("");

    const handleOrderSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderSearch(e.target.value);

    useEffect(() => setOrders(filterOrders(order, orderSearch, filter)), [orderSearch, filter]);

    return (
        <Dashboard title="Orders">
            <div className={dashboardStyles.mainContainer}>
                <div className="px-md-4 px-2 pb-4 mt-4">
                    <div className={dashboardStyles.totalRatingContainer}>
                        <div className="row px-4 py-4">
                            <div className="col-lg-3 px-md-3">
                                <RatingCard
                                    title="Total Orders"
                                    total="400"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Transaction Value"
                                    total="40"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Pending Orders"
                                    total="120"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                            <div className="col-lg-3 px-md-3 mt-lg-0 mt-4">
                                <RatingCard
                                    title="Performance"
                                    total="28"
                                    rating="+51%"
                                    desc="Analytics for last 30 days"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 mb-4">
                    <div className={classNames(orderStyles.ordersContainer, "py-4")}>
                        <div className="d-md-flex justify-content-between px-4">
                            <div className="d-md-flex">
                                <FilterOrdersDropdown setFilter={setFilter} page="orders" />

                                <div className={classNames(orderStyles.searchInput, "mt-md-0")}>
                                    <span>
                                        <ImSearch size={15} color="#A3A3C2" />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search orders"
                                        value={orderSearch}
                                        onChange={handleOrderSearch}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                orderStyles.listContainer,
                                "mt-4 table-responsive",
                            )}
                        >
                            <Table
                                items={orders}
                                page="orders"
                                setShow={setShow}
                                setItemStatus={setItemStatus}
                            />
                        </div>
                        <div
                            className={classNames(
                                orderStyles.paginationContainer,
                                "px-md-4 d-flex flex-md-row flex-column justify-content-between align-items-center",
                            )}
                        >
                            <div className="my-2">Showing 9 of 290 agents</div>
                            <div className="d-md-flex">
                                <div className="d-flex align-items-center">
                                    <div className={orderStyles.prev}>
                                        <BiChevronLeft />
                                    </div>
                                    <div className={classNames(orderStyles.page, "mx-2")}>
                                        <span className={orderStyles.activePageSpan}>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>...</span>
                                        <span>6</span>
                                    </div>
                                    <div className={orderStyles.next}>
                                        <BiChevronRight />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between px-1">
                                    <input type="text" placeholder="10" />
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <FaCaretUp />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <FaCaretDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-md-4 px-2 mb-4"></div>

                <OrderDetailsModal show={show} setShow={setShow} itemStatus={itemStatus} />
            </div>
        </Dashboard>
    );
};

export default withAuthRequired(OrdersPage);
