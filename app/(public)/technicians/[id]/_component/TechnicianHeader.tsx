import Image from "next/image";
import {
    BadgeCheck,
    Clock3,
    MapPin,
    Phone,
    Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ITechnician } from "@/types/types.technicians";

interface TechnicianHeaderProps {
    technician: ITechnician;
}

export default function TechnicianHeader({
                                             technician,
                                         }: TechnicianHeaderProps) {
    const location = [
        technician.user.address,
        technician.user.city,
    ]
        .filter(Boolean)
        .join(", ");

    return (
        <Card className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-4">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <Image
                            src={technician.user.profileImage || "/images/tech-1.jpg"}
                            alt={technician.user.name}
                            width={130}
                            height={130}
                            className="h-32 w-32 rounded-2xl border object-cover shadow-lg"
                        />

                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-3xl font-bold text-slate-900">
                                    {technician.user.name}
                                </h1>

                                {technician.user.isVerified && (
                                    <Badge className="gap-1 bg-blue-600 text-white">
                                        <BadgeCheck className="h-4 w-4" />
                                        Verified
                                    </Badge>
                                )}

                                <Badge
                                    className={
                                        technician.isAvailable
                                            ? "bg-green-600 text-white"
                                            : "bg-red-600 text-white"
                                    }
                                >
                                    {technician.isAvailable
                                        ? "Available"
                                        : "Unavailable"}
                                </Badge>
                            </div>

                            <p className="text-sm text-slate-500">
                                {technician.certification}
                            </p>

                            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">
                                {technician.averageRating.toFixed(1)}
                            </span>
                                    <span>({technician.totalReviews} Reviews)</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {location || "Location not provided"}
                                </div>

                                <div className="flex items-center gap-1">
                                    <Clock3 className="h-4 w-4" />
                                    {technician.experience} Years Experience
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:items-end">
                        <div className="text-left lg:text-right">
                            <p className="text-sm text-slate-500">
                                Hourly Rate
                            </p>

                            <h2 className="text-4xl font-bold text-blue-600">
                                ৳{technician.hourlyRate}
                                <span className="text-lg font-medium text-slate-500">
                            /hr
                        </span>
                            </h2>
                        </div>

                        <div className="flex w-full gap-3 lg:w-auto">
                            <Button variant="outline" className="flex-1 lg:flex-none">
                                <Phone className="mr-2 h-4 w-4" />
                                Contact
                            </Button>

                            <Button className="flex-1 lg:flex-none">
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}