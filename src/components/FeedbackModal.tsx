import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { AvatarPlaceholder } from "../../public/img/index";
import { getOrderStyle } from "../helpers/getRowStyles";
import moment from "moment";
import Image from "next/image";
import styles from "./FeedbackModal.module.scss";
import classNames from "classnames";

type FeedbackModalProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    selected: {
        status: string;
        budget: string;
    };
};

export default function FeedbackModal({ show, setShow, selected }: FeedbackModalProps) {
    const [showComments, setShowComments] = useState(true);
    const [comments, setComments] = useState([
        {
            user: "Leslie Alexander",
            date: "2022-03-03 11:40:00",
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
    ]);
    const [newComment, setNewComment] = useState("");

    const handleSubmit = () => {
        setComments([
            ...comments,
            {
                user: "Mikky brasi",
                date: new Date().toISOString(),
                comment: newComment,
            },
        ]);
        setNewComment("");
    };

    return (
        <Modal show={show} centered size="lg" className={styles.feedbackModal}>
            <Modal.Header className={styles.header}>
                <h3 className={styles.title}>Feedback</h3>
                <div className={styles.close} onClick={() => setShow(false)}>
                    <MdClose color="#3842B0" />
                </div>
            </Modal.Header>

            <Modal.Body className={styles.body}>
                <div className={styles.info}>
                    <div className={classNames("row", styles.row)}>
                        <p className={styles.item}>Issue created by</p>
                        <p className={styles.value}>Carolyn Harvey</p>
                    </div>
                    <div className={classNames("row", styles.row)}>
                        <p className={styles.item}>Budget</p>
                        <p className={classNames(styles.value, styles.budget)}>
                            ₦{parseInt(selected.budget).toFixed(2)}
                        </p>
                    </div>
                    <div className={classNames("row", styles.row)}>
                        <p className={styles.item}>Status</p>
                        <p className={styles.value}>
                            <span className={styles.status} style={getOrderStyle(selected.status)}>
                                {selected.status}
                            </span>
                        </p>
                    </div>
                    <div className={classNames("row", styles.row)}>
                        <p className={styles.item}>Sent</p>
                        <p className={styles.value}>05-5-2021</p>
                    </div>
                    <div className={classNames("row", styles.row)}>
                        <p className={styles.item}>Query</p>
                        <p className={styles.value}>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and
                            publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.buttons}>
                        <button
                            className={styles.comments}
                            type="button"
                            onClick={() => setShowComments(true)}
                        >
                            Comments
                        </button>

                        <button
                            className={styles.activities}
                            type="button"
                            onClick={() => setShowComments(false)}
                        >
                            Activities
                        </button>
                    </div>

                    {showComments && (
                        <div className={styles["comment-section"]}>
                            {comments.map((comment, index) => (
                                <div key={index} className={styles.comment}>
                                    <Image
                                        className={styles.image}
                                        src={AvatarPlaceholder}
                                        alt="Author avatar"
                                    />
                                    <div className={styles.content}>
                                        <div className={styles["user-info"]}>
                                            <p>{comment.user}</p>
                                            <span>{moment(comment.date).calendar()}</span>
                                        </div>
                                        <p className={styles.text}>{comment.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className={styles.input}>
                        <Image className={styles.image} src={AvatarPlaceholder} alt="User avatar" />
                        <textarea
                            className={styles.textarea}
                            placeholder="Add a comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer className={styles.footer}>
                <button className={styles.resolved} onClick={() => setShow(false)}>
                    Mark as resolved
                </button>

                <button className={styles.submit} onClick={() => handleSubmit()}>
                    Send reply
                </button>
            </Modal.Footer>
        </Modal>
    );
}
