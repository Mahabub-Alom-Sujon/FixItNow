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
                className="[--card-spacing:0] overflow-hidden rounded-3xl p-0 transition hover:-translate-y-2 hover:shadow-xl"
            >
                <Image
                    src="/images/cleaning.jpg"
                    alt={service.title}
                    width={500}
                    height={300}
                    className="h-60 w-full object-cover"
                />
                <div className="space-y-5 p-6">
                    <Badge className="px-4 py-3">{service.category.name}</Badge>
                    <div>
                        <h3 className="line-clamp-1 text-xl font-bold">
                            {service.title}
                        </h3>
                        <p>{service.description}</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            by {service.technician.user.name}
                        </p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {service.serviceArea}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock3 className="h-4 w-4" />
                            {service.duration} mins
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {service.technician.averageRating}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <ShieldCheck className="h-4 w-4 text-green-600" />
                            {service.technician.totalReviews} Reviews
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Starting From
                            </p>

                            <h3 className="text-2xl font-bold text-primary">
                                ৳{service.price}
                            </h3>
                        </div>

                        <Button asChild>
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

