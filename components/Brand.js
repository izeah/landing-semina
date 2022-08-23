import Image from "next/image";
import React from "react";

export default function Brand({ className }) {
    return (
        <section className={`brand-partner text-center ${className}`}>
            <p>Events held by top & biggest global companies</p>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                <Image src="/images/apple-111.svg" alt="semina" />
                <Image src="/images/Adobe.svg" alt="semina" />
                <Image src="/images/slack-21.svg" alt="semina" />
                <Image src="/images/spotify-11.svg" alt="semina" />
                <Image src="/images/google-2015.svg" alt="semina" />
            </div>
        </section>
    );
}
