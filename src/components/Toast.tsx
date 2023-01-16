import Image from "next/image";
import { useEffect } from "react";
import { AlertImage1, AlertImage2 } from "../../public/img";
import { useGlobalContext } from "../context/GlobalState";

export default function Toast() {
  const {
    toastData: { open, text, color },
    setToastData,
  } = useGlobalContext();

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setToastData({ open: false, text: "", color: "" });
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div
      className={`toast ${open ? "open" : "closed"}`}
      style={{ backgroundColor: color }}
    >
      <div className="image-bg">
        <Image src={AlertImage1} />
        <Image src={AlertImage2} />
      </div>
      <p>{text}</p>
    </div>
  );
}
