"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import BookingStatusBadge from "./BookingStatusBadge";
import PayNowButton from "@/app/(dashboard)/dashboard/_components/PayNowButton";

export interface Booking {
    id: string;
    bookingDate: string;
    bookingTime: string;
    address: string;
    note?: string;
    status:
        | "REQUESTED"
        | "ACCEPTED"
        | "DECLINED"
        | "PAID"
        | "IN_PROGRESS"
        | "COMPLETED"
        | "CANCELLED";

    // customer: {
    //     id: string;
    //     name: string;
    //     email: string;
    // };

    service: {
        id: string;
        title: string;
    };
}

interface BookingProps {
    bookings: Booking[];
    onAccept?: (id: string) => void;
    onDecline?: (id: string) => void;
    onPay?: (id: string) => void;
    onStart?: (id: string) => void;
    onComplete?: (id: string) => void;
    onReview?: (id: string) => void;
}

export default function Booking({
                                    bookings,
                                    onAccept,
                                    onDecline,
                                    onPay,
                                    onStart,
                                    onComplete,
                                    onReview,
                                }: BookingProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bookings</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="rounded-md border overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {/*<TableHead>Customer</TableHead>*/}
                                <TableHead>Service</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {bookings.length > 0 ? (
                                bookings.map((booking) => (
                                    <TableRow key={booking.id}>
                                        {/*<TableCell className="font-medium">*/}
                                        {/*    <div>{booking.customer.name}</div>*/}
                                        {/*    <p className="text-xs text-muted-foreground">*/}
                                        {/*        {booking.customer.email}*/}
                                        {/*    </p>*/}
                                        {/*</TableCell>*/}

                                        <TableCell>
                                            {booking.service.title}
                                        </TableCell>

                                        <TableCell>
                                            {new Date(
                                                booking.bookingDate
                                            ).toLocaleDateString()}
                                        </TableCell>

                                        <TableCell>
                                            {booking.bookingTime}
                                        </TableCell>

                                        <TableCell>
                                            <BookingStatusBadge status={booking.status} />
                                        </TableCell>

                                        <TableCell className="text-right">
                                            {booking.status === "REQUESTED" && (
                                                <div className="flex justify-end gap-2">
                                                    <Button size="sm">
                                                        Accept
                                                    </Button>

                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                    >
                                                        Decline
                                                    </Button>
                                                </div>
                                            )}

                                            {booking.status === "ACCEPTED" && (
                                                <PayNowButton
                                                    bookingId={booking.id}
                                                />
                                            )}

                                            {booking.status === "PAID" && (
                                                <Button size="sm">
                                                    Start Job
                                                </Button>
                                            )}

                                            {booking.status === "IN_PROGRESS" && (
                                                <Button size="sm">
                                                    Complete Job
                                                </Button>
                                            )}

                                            {booking.status === "COMPLETED" && (
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                >
                                                    Leave Review
                                                </Button>
                                            )}

                                            {(booking.status === "DECLINED" ||
                                                booking.status === "CANCELLED") && (
                                                <span className="text-sm text-muted-foreground">
                                                    No Action
                                                </span>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={6}
                                        className="h-24 text-center"
                                    >
                                        No bookings found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}