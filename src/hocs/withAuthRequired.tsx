import React from "react";

export function withAuthRequired<TProps extends {}>(
  Component: React.ComponentType<TProps>
): React.ComponentType<TProps> {
  return function AuthRequired(props: TProps) {
    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
      if (
        typeof window !== "undefined" &&
        !window.localStorage.getItem("accessToken")
      ) {
        window?.location.assign("/");
        return;
      }

      setRender(true);
    }, []);

    if (!render) return null;

    return <Component {...props} />;
  };
}
