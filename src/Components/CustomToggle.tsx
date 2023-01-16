import React from "react";

type CustomToggleProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

const CustomToggleRender: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  CustomToggleProps
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
