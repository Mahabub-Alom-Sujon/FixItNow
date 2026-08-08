import Link from "next/link";
import {
    BadgeCheck,
    CalendarDays,
    Clock,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AvailabilityDialog from "@/app/(public)/services/[id]/_components/AvailabilityDialog";

interface Availability {
    id: string;
    technicianId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
}

interface BookingCardProps {
    price: number;
    duration: number;
    technicianId: string;
    serviceId: string;
    availability: Availability[];
}

export default function BookingCard({
    price,
    duration,
    availability,
    // serviceCount,
    technicianId,
    serviceId
}: BookingCardProps) {
    return (
        <Card className="sticky top-24 w-full max-w-sm rounded-2xl border shadow-md">
            <CardContent className="space-y-5 p-5">
                {/* Header */}
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Starting From
                    </p>

                    <h2 className="mt-1 text-3xl font-bold text-blue-600">
                        ৳{price.toLocaleString()}
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Fixed service price
                    </p>
                </div>

                <Separator />

                {/* Duration */}
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-100 p-2">
                        <Clock className="size-4 text-blue-600" />
                    </div>

                    <div>
                        <p className="text-sm font-medium">Estimated Duration</p>
                        <p className="text-xs text-muted-foreground">
                            {duration} Minutes
                        </p>
                    </div>
                </div>

                <Separator />

                {/* Features */}
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="size-4 text-green-600" />
                        <span>Verified Professional</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-4 text-blue-600" />
                        <span>Flexible Scheduling</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BadgeCheck className="size-4 text-orange-500" />
                        <span>Secure Online Booking</span>
                    </div>
                </div>

                {/*<Button size="lg" className="w-full rounded-xl">*/}
                {/*    Book Now*/}
                {/*</Button>*/}
                <AvailabilityDialog
                    availability={availability}
                    technicianId={technicianId}
                    serviceId={serviceId}
                />
                <p className="text-center text-xs text-muted-foreground">
                    No payment required to request a booking.
                </p>
            </CardContent>
        </Card>
    );
}