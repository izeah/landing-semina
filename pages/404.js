import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function PageNotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.back();
        }, 2000);
    });

    return <div>PageNotFound</div>;
}
