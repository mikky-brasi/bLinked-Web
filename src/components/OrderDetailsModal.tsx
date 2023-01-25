import React, { useState, useEffect } from "react";
// Components
import { Modal } from "react-bootstrap";
import { AgentModal } from "./AgentModal";
import { MdClose } from "react-icons/md";
import { BiChevronDown, BiDotsVerticalRounded } from "react-icons/bi";
// Data
import agentsData from "../mockData/agents.json";
// Helpers
import { getOrderStyle } from "../helpers/getRowStyles";
import modalStyles from "./modals.module.scss";
import classNames from "classnames";
import styles from "./OrderDetailsModal.module.scss";

type OrderDetailsModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    itemStatus: string;
};

export default function OrderDetailsModal({ show, setShow, itemStatus }: OrderDetailsModalProps) {
    const [agentErr, setAgentErr] = useState(false);
    const [agentsFocus, setAgentsFocus] = useState(false);
    const [selectedAgent, setSelectedAgent] = useState("");
    const [searchResult, setSearchResult] = useState(false);
    const [agentSearch, setAgentSearch] = useState("");
    const [agents, setAgents] = useState(agentsData);

    const handleModal = () => {
        setSearchResult(false);
        setAgentSearch("");
        setAgentErr(false);
        setShow(!show);
        setAgentsFocus(false);
    };

    const handleAgentSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAgentSearch(e.target.value);

    const handleConfirm = () => (!agents ? setAgentErr(true) : handleModal());

    const inputFocus = () => setSearchResult(true);

    useEffect(() => {
        if (agentSearch === "") return;
        setAgents(
            agentsData.filter(
                (agent) =>
                    agent.agentName?.toLowerCase().includes(agentSearch.toLowerCase()) ||
                    agent.location?.toLowerCase().includes(agentSearch.toLowerCase()) ||
                    agent.status?.toLowerCase().includes(agentSearch.toLowerCase()),
            ),
        );
    }, [agentSearch]);

    useEffect(() => {
        if (agents.length > 0 && show) setSelectedAgent(agents[0].agentName);
    }, [agents, show]);

    return (
        <Modal show={show} onHide={handleModal} centered size="lg">
            <Modal.Header
                className={classNames(
                    modalStyles.header,
                    styles.header,
                    "d-flex justify-content-between py-4",
                )}
            >
                <div className={classNames(styles.headerTitle)}>Order Details</div>
                <div className="mx-md-4" onClick={handleModal}>
                    <MdClose />
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="my-4 px-md-4">
                    <div>
                        <div className={styles.id}>Order ID 15285046</div>
                        <div className={classNames(styles.fromPrice, "mt-2")}>
                            <span>
                                From <span> Isolo Ire-Akari Estate &bull; 12mins ago</span>
                            </span>
                            <span>₦850,000.00</span>
                        </div>
                        <div className={styles.to}>
                            To<span> Isolo Ire-Akari Estate</span>
                        </div>
                        <div className={classNames(styles.status, "mt-2")}>
                            <span
                                className="rounded-pill px-2 py-1"
                                style={getOrderStyle(itemStatus)}
                            >
                                {itemStatus}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-5 px-md-4">
                    {itemStatus === "Assigned" ? (
                        <div className={styles.agent}>
                            <div className="row p-4">
                                <div className="col-lg-6">
                                    <div>Order amount</div>
                                    <div>₦4,000.00</div>
                                </div>
                                <div className="col-lg-6">
                                    <div>Assigned Agent</div>
                                    <div>Assurance Uwangue</div>
                                    <div className={styles.menu}>
                                        <BiDotsVerticalRounded />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.title}>Assign Agent</div>
                            <div className="col-lg-12 mt-md-4 mt-4 auth-input-container">
                                <div
                                    className={
                                        agentsFocus || selectedAgent !== ""
                                            ? "input-box active w-100"
                                            : agentErr
                                            ? "input-box w-100 forgot-email-border"
                                            : "input-box w-100"
                                    }
                                >
                                    <div>
                                        {/* <img src={eye} alt="Eye" className="img-fluid" /> */}
                                        <BiChevronDown size={25} color="#A3A3C2" />
                                    </div>
                                    <label>Search Agents</label>
                                    <input
                                        readOnly
                                        type="text"
                                        className="w-100"
                                        name="agent"
                                        value={selectedAgent}
                                        onFocus={() => inputFocus()}
                                    />
                                </div>
                            </div>
                            <div>
                                <span className={styles.agentError}>
                                    {agentErr
                                        ? "An agent need to be assigned before this order can be confirmed"
                                        : ""}
                                </span>
                            </div>
                            <div className={searchResult ? "mt-1 position-relative" : "d-none"}>
                                <div
                                    className={classNames(
                                        styles.agentInput,
                                        "position-absolute w-100",
                                    )}
                                >
                                    <input
                                        type="text"
                                        placeholder="Search agent"
                                        value={agentSearch}
                                        onChange={handleAgentSearch}
                                    />
                                </div>
                                <div
                                    className={classNames(
                                        styles.resultMain,
                                        "position-absolute w-100 mt-5",
                                    )}
                                >
                                    <ul>
                                        {agents.map((item) => (
                                            <AgentModal
                                                key={item.id}
                                                onClick={() => {
                                                    setAgentsFocus(true);
                                                    setSelectedAgent(item.agentName);
                                                    setSearchResult(false);
                                                    setAgentErr(false);
                                                }}
                                                item={item}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Modal.Body>

            <Modal.Footer className="py-4">
                <button className={styles.closeBtn} onClick={handleModal}>
                    Close
                </button>

                <button className={styles.submitBtn} onClick={() => handleConfirm()}>
                    {itemStatus === "Assigned" ? "Mark as fulfilled" : "Confirm"}
                </button>
            </Modal.Footer>
        </Modal>
    );
}
