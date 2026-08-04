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
                className="[--card-spacing:0] overflow-hidden rounded-2xl p-0 transition hover:-translate-y-2 hover:shadow-xl"
            >
                <div className="relative overflow-hidden">
                    <Image
                        src="/images/cleaning.jpg"
                        alt={service.title}
                        width={400}
                        height={250}
                        className="h-60 w-full object-cover"
                    />

                    {/* Bottom Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/60 px-4 py-3 text-white backdrop-blur-sm">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium ">
                                {service.technician.averageRating}
                            </span>
                        </div>

                        <div className="flex items-center gap-1 text-sm">
                            <ShieldCheck className="h-4 w-4 text-green-400" />
                            <span>{service.technician.totalReviews} Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 p-6">
                    <Badge className="px-4 py-3">{service.category.name}</Badge>
                    <div>
                        <h3 className="line-clamp-1 text-xl font-bold">
                            {service.title}
                        </h3>
                        <p>{service.description}</p>
                        {/*<p className="mt-2 text-sm text-muted-foreground">*/}
                        {/*    by {service.technician.user.name}*/}
                        {/*</p>*/}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {service.technician.user.city}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock3 className="h-4 w-4" />
                            {service.duration} mins
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

