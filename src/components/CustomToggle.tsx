import React from "react";

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
    >
        {children}
    </span>
);

export const CustomToggle = React.forwardRef(CustomToggleRender);
