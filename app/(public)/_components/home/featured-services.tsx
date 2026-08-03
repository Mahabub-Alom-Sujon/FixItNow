import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Clock3,
    MapPin,
    ShieldCheck,
    Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServices } from "@/app/(public)/services/_actions/getServices";
import React from "react";

export default async function FeaturedServices() {
    const result = await getServices({});

    const services =
        result?.data?.data?.filter(
            (service: any) => service.featured === true
        ) || [];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <Badge className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-100">
                            Featured Services
                        </Badge>

                        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
                            Popular Home Services
                        </h2>

                        <p className="mt-3 max-w-2xl text-slate-600">
                            Discover trusted professionals with verified reviews,
                            transparent pricing, and fast online booking.
                        </p>
                    </div>

                    <Button asChild>
                        <Link href="/services">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {services.map((service: any) => (
                        <Card
                            key={service.id}
                            className="[--card-spacing:0] group overflow-hidden rounded-3xl border-0 p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={service.image || "/images/cleaning.jpg"}
                                    alt={service.title}
                                    width={450}
                                    height={250}
                                    className="h-60 w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <Badge className="absolute left-4 top-4 rounded-full bg-blue-600">
                                    Featured
                                </Badge>

                                <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    {service.rating ?? 5}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-5 p-6">
                                <div>
                                    <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
                                        {service.title}
                                    </h3>
                                    <p>{service.description}</p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        by {service.technician?.user?.name || "Unknown"}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {service.serviceArea}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Clock3 className="h-4 w-4" />
                                        {service.duration} mins
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <ShieldCheck className="h-4 w-4 text-green-600" />
                                    <span className="text-slate-600">
                                       {service.technician?.totalReviews ?? 0} Reviews
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-t pt-4">
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Starting From
                                        </p>

                                        <h4 className="text-2xl font-bold text-blue-600">
                                            ৳{service.price}
                                        </h4>
                                    </div>

                                    <Button asChild>
                                        <Link href={`/services/${service.id}`}>
                                            Book Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}