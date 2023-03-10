import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CatchAll() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return null;
}
