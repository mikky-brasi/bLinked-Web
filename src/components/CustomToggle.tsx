import React from "react";

export const CustomToggle = React.forwardRef<
    HTMLSpanElement,
    {
        children: React.ReactNode;
        onClick: React.MouseEventHandler<HTMLSpanElement>;
    }
>(({ children, onClick }, ref) => (
    <span
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </span>
));
