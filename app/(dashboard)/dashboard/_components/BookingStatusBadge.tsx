"use client";

import { cn } from "@/lib/utils";

export type BookingStatus =
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

interface Props {
    status: BookingStatus;
}

const statusConfig: Record<
    BookingStatus,
    {
        label: string;
        className: string;
    }
> = {
    REQUESTED: {
        label: "Requested",
        className:
            "bg-yellow-100 text-yellow-800 border-yellow-300",
    },

    ACCEPTED: {
        label: "Accepted",
        className:
            "bg-blue-100 text-blue-800 border-blue-300",
    },

    DECLINED: {
        label: "Declined",
        className:
            "bg-red-100 text-red-800 border-red-300",
    },

    PAID: {
        label: "Paid",
        className:
            "bg-purple-100 text-purple-800 border-purple-300",
    },

    IN_PROGRESS: {
        label: "In Progress",
        className:
            "bg-green-100 text-green-800 border-green-300",
    },

    COMPLETED: {
        label: "Completed",
        className:
            "bg-gray-100 text-gray-800 border-gray-300",
    },

    CANCELLED: {
        label: "Cancelled",
        className:
            "bg-red-900 text-white border-red-900",
    },
};

export default function BookingStatusBadge({
                                               status,
                                           }: Props) {
    const config = statusConfig[status];

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap",
                config.className
            )}
        >
            {config.label}
        </span>
    );
}