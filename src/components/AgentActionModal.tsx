import Image from "next/image";
import React, { useState, useEffect, useRef, CSSProperties } from "react";
import { Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { Memoji } from "../../public/img";
import { getOrderStyle } from "../helpers/getRowStyles";
import { AgentItem } from "./Table";
import styles from "./AgentActionModal.module.scss";
import classNames from "classnames";
import modalStyles from "./modals.module.scss";

type AgentActionModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    action: string;
    selected: AgentItem | null;
};

export default function AgentActionModal({
    show,
    setShow,
    action,
    selected,
}: AgentActionModalProps) {
    const [content, setContent] = useState<{
        title?: string;
        subtitle?: string;
        text?: string;
        image?: string;
        button?: string;
        buttonStyle?: CSSProperties;
    }>({});
    const [focus, setFocus] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const getContent = () => {
            switch (action) {
                case "Add":
                    return setContent({
                        title: "Add Agent",
                        image: "Add Agent photo",
                        button: "Add Agent",
                        buttonStyle: {
                            color: "#FFF",
                            backgroundColor: "#3842B0",
                        },
                    });
                case "Edit":
                    return setContent({
                        title: "Edit Agent",
                        image: "Add Agent photo",
                        button: "Save Changes",
                        buttonStyle: {
                            color: "#FFF",
                            backgroundColor: "#3842B0",
                        },
                    });
                case "Suspend":
                    return setContent({
                        title: "Confirm suspention",
                        subtitle: "Are you sure you want to suspend this agent",
                        text: "Suspending this agent means they will no longer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
                        button: "Suspend Agent",
                        buttonStyle: {
                            color: "#FFF",
                            backgroundColor: "#FF4554",
                        },
                    });
                case "Remove":
                    return setContent({
                        title: "Confirm removal",
                        subtitle: "Are you sure you want to remove this agent",
                        text: "Removing this agent means they will no longer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
                        button: "Remove Agent",
                        buttonStyle: {
                            color: "#FFF",
                            backgroundColor: "#FF4554",
                        },
                    });
                default:
                    return "Agent";
            }
        };
        getContent();
        if (action === "Edit" && selected !== null) {
            // TODO: get initial data.
            setFirstName(selected.agentName || "");
            setLastName("");
            setEmail("");
            setPhone("");
            setImage(null);
        } else {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setImage(null);
        }
    }, [action, selected]);

    const handleReaderLoaded = (readerEvt: ProgressEvent<FileReader>) => {
        if (readerEvt.target === null) return;
        const { result } = readerEvt.target;
        setImage(btoa(result as string));
    };

    const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const onInputClick = () => inputRef.current?.click();

    return (
        <Modal
            show={show}
            centered
            size={action === "Suspend" || action === "Remove" ? undefined : "lg"}
            className={styles.wrapper}
        >
            <Modal.Header className={modalStyles.header}>
                <h3 className={modalStyles.title}>{content.title}</h3>
                <div className={modalStyles.close} onClick={() => setShow(false)}>
                    <MdClose color="#3842B0" />
                </div>
            </Modal.Header>

            {action === "Suspend" || action === "Remove" ? (
                <Modal.Body className={styles.body}>
                    <h4 className={styles.subtitle}>{content.subtitle}</h4>
                    <p className={styles.text}>{content.text}</p>
                </Modal.Body>
            ) : null}

            {action === "Add" || action === "Edit" ? (
                <Modal.Body className={styles.body}>
                    <form className={styles.form}>
                        {action === "Add" && <p className={styles.imageLabel}>{image}</p>}
                        {action === "Edit" && !!selected && (
                            <p className={styles.imageLabel}>
                                {selected.agentName}
                                <span
                                    className="mx-2 px-2 rounded-pill"
                                    style={getOrderStyle(selected.status)}
                                >
                                    {selected.status}
                                </span>
                            </p>
                        )}
                        <div className={styles.imageContainer}>
                            <div className={styles.bg}>
                                <Image
                                    src={image ? `data:image/png;base64,${image}` : Memoji}
                                    alt="Emoji placeholder"
                                    className={styles.img}
                                />
                                <input
                                    className={styles.hidden}
                                    accept="image/png, image/jpeg, image/jpg, image/webp"
                                    ref={inputRef}
                                    onChange={(e) => handleImg(e)}
                                    type="file"
                                />
                            </div>
                            <button
                                className={styles.photoBtn}
                                type="button"
                                onClick={() => onInputClick()}
                            >
                                Edit photo
                            </button>
                        </div>
                        <div className={classNames(styles.row, "row")}>
                            <div className={styles.group}>
                                <label
                                    className={styles.label}
                                    style={{
                                        display:
                                            focus === "firstName" || firstName.length > 0
                                                ? "block"
                                                : "none",
                                    }}
                                >
                                    First name
                                </label>
                                <input
                                    className={styles.input}
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onFocus={() => setFocus("firstName")}
                                    onBlur={() => setFocus("")}
                                />
                            </div>
                            <div className={styles.group}>
                                <label
                                    className={styles.label}
                                    style={{
                                        display:
                                            focus === "lastName" || lastName.length > 0
                                                ? "block"
                                                : "none",
                                    }}
                                >
                                    Last name
                                </label>
                                <input
                                    className={styles.input}
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    onFocus={() => setFocus("lastName")}
                                    onBlur={() => setFocus("")}
                                />
                            </div>
                        </div>
                        <div className={styles.group}>
                            <label
                                className={styles.label}
                                style={{
                                    display:
                                        focus === "email" || email.length > 0 ? "block" : "none",
                                }}
                            >
                                Email address
                            </label>
                            <input
                                className={styles.input}
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocus("email")}
                                onBlur={() => setFocus("")}
                            />
                        </div>
                        <div className={styles.group}>
                            <label
                                className={styles.label}
                                style={{
                                    display:
                                        focus === "phone" || phone.length > 0 ? "block" : "none",
                                }}
                            >
                                Phone Number
                            </label>
                            <input
                                className={styles.input}
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => setFocus("phone")}
                                onBlur={() => setFocus("")}
                            />
                        </div>
                    </form>
                </Modal.Body>
            ) : null}
            <Modal.Footer className={styles.footer}>
                <button className={styles.cancel} onClick={() => setShow(false)}>
                    Cancel
                </button>
                <button className={styles.submit} style={content.buttonStyle}>
                    {content.button}
                </button>
            </Modal.Footer>
        </Modal>
    );
}
