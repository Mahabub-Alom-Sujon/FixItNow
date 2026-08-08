"use client";

import { Badge } from "@/components/ui/badge";
import { Clock, CalendarDays } from "lucide-react";
import { format, addDays } from "date-fns";
import moment from "moment";
interface Availability {
    id: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
}

interface Props {
    slot: Availability;
}

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getNextDate(dayOfWeek: number) {
    const today = new Date();
    const currentDay = today.getDay();

    let diff = dayOfWeek - currentDay;

    if (diff < 0) {
        diff += 7;
    }

    return addDays(today, diff);
}

export default function AvailabilitySlot({ slot }: Props) {
    const nextDate = getNextDate(slot.dayOfWeek);

    return (
        <div className="rounded-xl border p-4 transition hover:bg-muted/40">
            <div className="flex items-start justify-between">
                <div className="space-y-2">
                    <p className="font-semibold">
                        {DAYS[slot.dayOfWeek]}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4" />
                        {format(nextDate, "dd MMM yyyy")}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-4" />
                        {moment(slot.startTime, "HH:mm").format("hh:mm A")} -{" "}
                        {moment(slot.endTime, "HH:mm").format("hh:mm A")}
                    </div>
                </div>

                <Badge variant={slot.isAvailable ? "default" : "secondary"}>
                    {slot.isAvailable ? "Available" : "Unavailable"}
                </Badge>
            </div>
        </div>
    );
}