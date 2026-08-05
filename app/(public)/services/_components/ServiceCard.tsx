//import {getServices} from "@/app/(public)/services/_actions/getServices";
import { IService } from "@/types/types.service";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Clock3, MapPin, ShieldCheck, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card} from "@/components/ui/card";
import React from "react";

interface ServiceCardProps {
    service: IService;
}
export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <>
            <Card
                key={service.id}
                className="[--card-spacing:0] group overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
                {/* Image */}
                <div className="relative overflow-hidden">
                    <Image
                        src="/images/cleaning.jpg"
                        alt={service.title}
                        width={400}
                        height={250}
                        className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category */}
                    <Badge className="absolute left-4 top-4 rounded-full bg-primary px-3 py-3 text-white shadow-md">
                        {service.category.name}
                    </Badge>

                    {/* Rating */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">
                                {service.technician.averageRating.toFixed(1)}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                            <ShieldCheck className="h-4 w-4 text-green-400" />
                            <span>{service.technician.totalReviews} Reviews</span>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="space-y-5 p-6">
                    <div>
                        <h3 className="line-clamp-1 text-xl font-bold text-slate-900">
                            {service.title}
                        </h3>

                        <p className=" mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                            {service.description}
                        </p>
                    </div>

                    {/* Location & Duration */}
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{service.technician.user.city}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-primary" />
                            <span>{service.duration} mins</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-slate-500">
                                Starting From
                            </p>

                            <h3 className="text-3xl font-bold text-primary">
                                ৳{service.price}
                            </h3>
                        </div>

                        <Button asChild size="lg" className="rounded-xl">
                            <Link href={`/services/${service.id}`}>
                                Book Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </>
    );
}

