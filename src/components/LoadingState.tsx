import Image from "next/image";
import { useEffect, useState } from "react";
import { Loading1, Loading2, Loading3 } from "../../public/img/index";
import { useGlobalContext } from "../context/GlobalState";

export default function LoadingState() {
    const { loading } = useGlobalContext();
    const [logo, setLogo] = useState(Loading1);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                if (logo === Loading1) return setLogo(Loading2);
                if (logo === Loading2) return setLogo(Loading3);
                if (logo === Loading3) return setLogo(Loading1);
            }, 500);
        }
    }, [loading, logo]);

    return (
        <div className="loading-state" style={{ display: loading ? "flex" : "none" }}>
            <Image src={logo} alt="logo" />
        </div>
    );
}
