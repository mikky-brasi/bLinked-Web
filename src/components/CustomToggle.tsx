import React from "react";
import styles from "./CustomToggle.module.scss";

const CustomToggleRender: React.ForwardRefRenderFunction<
    HTMLSpanElement,
    {
        children: React.ReactNode;
        onClick: React.MouseEventHandler<HTMLSpanElement>;
    }
> = ({ children, onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className={styles.toggle}
    >
        {children}
    </span>
);

export const CustomToggle = React.forwardRef(CustomToggleRender);
