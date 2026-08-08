"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    CreditCard,
    CalendarDays,
    MapPin,
    Receipt,
    User,
    Wrench,
} from "lucide-react";

export interface PaymentDetailsData {
    id: string;
    transactionId: string;
    amount: number;
    provider: string;
    method: string;
    status: string;
    paidAt: string | null;
    bookingId: string;
    userId: string | null;
    createdAt: string;
    updatedAt: string;

    booking?: {
        id: string;
        bookingDate: string;
        bookingTime: string | null;
        note: string | null;
        address: string | null;
        status: string;
        isAvailable: boolean;
        isBooked: boolean;
        customerId: string;
        technicianId: string;
        serviceId: string;
        createdAt: string;
        updatedAt: string;
    };
}

interface PaymentDetailsProps {
    payment: PaymentDetailsData;
}

const getStatusVariant = (
    status: string
): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
        case "COMPLETED":
            return "default";

        case "PENDING":
            return "secondary";

        case "FAILED":
            return "destructive";

        case "REFUNDED":
            return "outline";

        default:
            return "outline";
    }
};

const formatAmount = (amount: number) => {
    return `৳${(amount / 100).toFixed(2)}`;
};

const formatDate = (date: string | null) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const formatDateTime = (date: string | null) => {
    if (!date) return "—";

    return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });
};

const InfoItem = ({
                      label,
                      value,
                  }: {
    label: string;
    value: string;
}) => {
    return (
        <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
                {label}
            </p>

            <p className="font-medium break-all">
                {value}
            </p>
        </div>
    );
};

export default function PaymentDetails({
                                           payment,
                                       }: PaymentDetailsProps) {
    const booking = payment.booking;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        Payment Details
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        View payment transaction information.
                    </p>
                </div>

                <Badge
                    variant={getStatusVariant(payment.status)}
                    className="w-fit"
                >
                    {payment.status}
                </Badge>
            </div>

            {/* Payment Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Receipt className="h-5 w-5" />
                        Payment Summary
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Amount
                            </p>

                            <p className="mt-1 text-2xl font-bold">
                                {formatAmount(payment.amount)}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Provider
                            </p>

                            <div className="mt-2">
                                <Badge variant="outline">
                                    {payment.provider}
                                </Badge>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Payment Method
                            </p>

                            <p className="mt-1 font-medium">
                                {payment.method}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Paid At
                            </p>

                            <p className="mt-1 font-medium">
                                {formatDateTime(payment.paidAt)}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Transaction Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Transaction Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <InfoItem
                            label="Payment ID"
                            value={payment.id}
                        />

                        <InfoItem
                            label="Transaction ID"
                            value={payment.transactionId}
                        />

                        <InfoItem
                            label="Booking ID"
                            value={payment.bookingId}
                        />

                        <InfoItem
                            label="User ID"
                            value={payment.userId || "Not available"}
                        />

                        <InfoItem
                            label="Created At"
                            value={formatDateTime(
                                payment.createdAt
                            )}
                        />

                        <InfoItem
                            label="Updated At"
                            value={formatDateTime(
                                payment.updatedAt
                            )}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Booking Information */}
            {booking && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5" />
                            Booking Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <InfoItem
                                label="Booking Date"
                                value={formatDate(
                                    booking.bookingDate
                                )}
                            />

                            <InfoItem
                                label="Booking Time"
                                value={
                                    booking.bookingTime || "—"
                                }
                            />

                            <InfoItem
                                label="Booking Status"
                                value={booking.status}
                            />

                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">
                                    Availability
                                </p>

                                <Badge
                                    variant={
                                        booking.isAvailable
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {booking.isAvailable
                                        ? "Available"
                                        : "Unavailable"}
                                </Badge>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">
                                    Booking
                                </p>

                                <Badge
                                    variant={
                                        booking.isBooked
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {booking.isBooked
                                        ? "Booked"
                                        : "Not Booked"}
                                </Badge>
                            </div>

                            <InfoItem
                                label="Booking ID"
                                value={booking.id}
                            />
                        </div>

                        <Separator />

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="flex gap-3">
                                <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Service Address
                                    </p>

                                    <p className="font-medium">
                                        {booking.address || "—"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Receipt className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Note
                                    </p>

                                    <p className="font-medium">
                                        {booking.note || "No note"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* IDs */}
                        <div className="grid gap-6 sm:grid-cols-3">
                            <div className="flex gap-3">
                                <User className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Customer ID
                                    </p>

                                    <p className="text-sm font-medium break-all">
                                        {booking.customerId}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Wrench className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Technician ID
                                    </p>

                                    <p className="text-sm font-medium break-all">
                                        {booking.technicianId}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Receipt className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Service ID
                                    </p>

                                    <p className="text-sm font-medium break-all">
                                        {booking.serviceId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}