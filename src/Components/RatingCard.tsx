import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

type RatingCardProps = {
  title: string;
  total: string;
  rating: string;
  desc: string;
};

const RatingCard = ({ title, total, rating, desc }: RatingCardProps) => {
  return (
    <div className="total-rating-card p-4">
      <div className="total-rating-card-title">{title}</div>
      <div className="total-rating-card-total mt-3">
        <span>{total}</span>
        <span>
          ({rating})<AiOutlineArrowUp />
        </span>
      </div>
      <div className="total-rating-card-desc mt-1">{desc}</div>
    </div>
  );
};

export default RatingCard;
