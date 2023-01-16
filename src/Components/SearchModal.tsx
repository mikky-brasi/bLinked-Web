import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { AvatarPlaceholder, History } from "../../public/img";
import { getOrderStyle } from "../helpers/getRowStyles";
import moment from "moment";

import { ImSearch } from "react-icons/im";
import history from "../mockData/recentSearch.json";
import Image from "next/image";

type FeedbackModalProps = {
    show: boolean;
    setShow: (value: boolean) => void;
}

export default function FeedbackModal({ show, setShow }: FeedbackModalProps) {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="dashboard-search"
    >
      <div className="dashboard-search-input m-0 ">
        <span>
          <ImSearch size={20} color="#A3A3C2" />
        </span>
        <input type="text" placeholder="Search Anything..." />
      </div>
      <div className="my-4 mx-2 dashboard-search-history">
        <span className="mx-1">RECENT SEARCHES</span>
        <ul className="mt-2">
          {history.map((data) => (
            <li className="p-1 pr-0" key={data.id}>
              <Image src={History} alt="history" />
              <span className="mx-3">{data.string}</span>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
