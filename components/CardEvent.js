import Link from "next/link";
import React from "react";
import { formatDate } from "../utils/formatDate";
import CardTitle from "./CardTitle";

export default function CardEvent({ data, title, subTitle }) {
    return (
        <section className="grow-today">
            <div className="container">
                <CardTitle title={title} subTitle={subTitle} />
                <div className="mt-5 row gap">
                    {data.map((data, index) => (
                        <div className="col-lg-3 col-md-6 col-12" key={index}>
                            <div className="card-grow h-100">
                                <span className="badge-pricing">
                                    {data.tickets[0].price === 0
                                        ? "free"
                                        : `$${data.tickets[0].price}`}
                                </span>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${data.image.name}`}
                                    alt="semina"
                                    layout="fill"
                                />
                                <div className="card-content">
                                    <div className="card-title">
                                        {data.title}
                                    </div>
                                    <div className="card-subtitle">
                                        {data.category.name}
                                    </div>
                                    <div className="description">
                                        {data.venueName},{" "}
                                        {formatDate(data.date)}
                                    </div>
                                    <Link href={`/detail/${data._id}`}>
                                        <a className="stretched-link"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
