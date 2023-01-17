import React from "react";
import { getOrderStyle } from "../helpers/getRowStyles";
import { BsThreeDots } from "react-icons/bs";
import AgentDropdown from "./AgentDropdown";

export type FeedbackItem = {
    id: number;
    agentName: string;
    orderId: string;
    customerName: string;
    budget: string;
    status: string;
};

export type OrderItem = {
    id: number;
    name: string;
    from: string;
    to: string;
    price: string;
    status: string;
    image: string;
};

export type HomeItem = {
    id: number;
    name: string;
    from: string;
    to: string;
    price: string;
    status: string;
};

export type AgentItem = {
    id: number;
    agentName: string;
    location: string;
    revenue: string;
    orders: number;
    status: string;
};

type TableProps =
    | {
          items: HomeItem[];
          page: "home";
          setShow: (show: boolean) => void;
          setSelected: (item: HomeItem) => void;
      }
    | {
          items: OrderItem[];
          page: "orders";
          setShow: (show: boolean) => void;
          setItemStatus: (status: string) => void;
      }
    | {
          items: AgentItem[];
          page: "agents";
          setShow: (show: boolean) => void;
          showDropdown?: boolean;
          setShowDropdown: (show: boolean) => void;
          setItemStatus: (status: string) => void;
          setModalAction: (action: string) => void;
          selected: AgentItem | null;
          setSelected: (item: AgentItem) => void;
      }
    | {
          items: FeedbackItem[];
          page: "feedback";
          setShow: (show: boolean) => void;
          setSelected: (item: FeedbackItem) => void;
      };

export default function Table<TItem>(props: TableProps) {
    if (props.page === "home") {
        const { items, setShow, setSelected } = props;

        return (
            <table className="mt-4">
                <thead>
                    <tr>
                        <th>CUSTOMER NAME</th>
                        <th>FROM LOCATION</th>
                        <th>TO LOCATION</th>
                        <th>TOTAL AMOUNT</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        const { name, from, to, price, status } = item;
                        return (
                            <tr key={i}>
                                <td>{name}</td>
                                <td>{from}</td>
                                <td>{to}</td>
                                <td>₦{parseInt(price).toFixed(2)}</td>
                                <td className="home-pending-order-list-status">
                                    <span
                                        className="px-2 py-1 rounded-pill"
                                        style={getOrderStyle(status)}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td
                                    className="three_dots"
                                    onClick={() => {
                                        setSelected(item);
                                        setShow(true);
                                    }}
                                >
                                    <BsThreeDots color="#727E8F" size={23} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    if (props.page === "orders") {
        const { items, setShow, setItemStatus } = props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ORDER VENDOR</th>
                        <th>FROM LOCATION</th>
                        <th>TO LOCATION</th>
                        <th>TOTAL AMOUNT</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        const { name, from, to, price, status } = item;
                        return (
                            <tr key={i}>
                                <td className="order-item-name">
                                    <span className="d-flex align-items-center">
                                        <span>TB</span>
                                        {name}
                                    </span>
                                </td>
                                <td>
                                    <span>{from}</span>
                                </td>
                                <td>
                                    <span>{to}</span>
                                </td>
                                <td>
                                    <span>₦{parseInt(price).toFixed(2)}</span>
                                </td>
                                <td className="order-list-status">
                                    <span
                                        className="px-2 py-1 rounded-pill"
                                        style={getOrderStyle(status)}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td
                                    className="three_dots"
                                    onClick={() => {
                                        setShow(true);
                                        setItemStatus(status);
                                    }}
                                >
                                    <BsThreeDots color="#727E8F" size={23} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    if (props.page === "agents") {
        const {
            items,
            selected,
            setItemStatus,
            setModalAction,
            setSelected,
            setShow,
            setShowDropdown,
            showDropdown,
        } = props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>AGENT CONTACT</th>
                        <th>CURRENT LOCATION</th>
                        <th>TOTAL ORDERS</th>
                        <th>REVENUE GENERATED</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        const { id, agentName, location, revenue, orders, status } = item;
                        return (
                            <tr key={id}>
                                <td className="order-item-name">
                                    <span className="d-flex align-items-center">
                                        <span>TB</span>
                                        {agentName}
                                    </span>
                                </td>
                                <td>
                                    <span>{location}</span>
                                </td>
                                <td>
                                    <span>{orders}</span>
                                </td>
                                <td>
                                    <span>₦{parseInt(revenue).toFixed(2)}</span>
                                </td>
                                <td className="order-list-status">
                                    <span
                                        className="px-2 py-1 rounded-pill"
                                        style={getOrderStyle(status)}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td
                                    className="three_dots"
                                    onClick={() => {
                                        setSelected(item);
                                        setShowDropdown(!showDropdown);
                                        setItemStatus(status);
                                    }}
                                    onBlur={() => setShowDropdown(false)}
                                >
                                    <BsThreeDots color="#727E8F" size={23} />
                                    {showDropdown && selected && selected.id === id && (
                                        <AgentDropdown
                                            setShow={setShow}
                                            setModalAction={setModalAction}
                                            setShowDropdown={setShowDropdown}
                                        />
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    if (props.page === "feedback") {
        const { items, setSelected, setShow } = props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>AGENT NAME</th>
                        <th>ORDER ID</th>
                        <th>CUSTOMER NAME</th>
                        <th>BUDGET</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => {
                        const { agentName, orderId, customerName, budget, status } = item;
                        return (
                            <tr key={i}>
                                <td className="order-item-name">
                                    <span className="d-flex align-items-center">
                                        <span>TB</span>
                                        {agentName}
                                    </span>
                                </td>
                                <td>
                                    <span>{orderId}</span>
                                </td>
                                <td>
                                    <span>{customerName}</span>
                                </td>
                                <td>
                                    <span>₦{parseInt(budget).toFixed(2)}</span>
                                </td>
                                <td className="order-list-status">
                                    <span
                                        className="px-2 py-1 rounded-pill"
                                        style={getOrderStyle(status)}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td
                                    className="three_dots"
                                    onClick={() => {
                                        setSelected(item);
                                        setShow(true);
                                    }}
                                >
                                    <BsThreeDots color="#727E8F" size={23} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    return null;
}
