"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

export interface Payment {
    id: string;
    transactionId: string;
    amount: number;
    provider: "STRIPE" | string;
    method: "CARD" | string;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED" | string;
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

interface PaymentTableProps {
    payments: Payment[];
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

const formatDate = (date: string | null) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
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

const formatAmount = (amount: number) => {
    // Your API amount is in the smallest currency unit.
    return `৳${(amount / 100).toFixed(2)}`;
};

const shortenId = (id: string, length = 12) => {
    if (!id) return "—";

    return `${id.slice(0, length)}...`;
};

export default function PaymentTable({
                                         payments,
                                     }: PaymentTableProps) {
    return (
        <Card>
            <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Transaction ID</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Provider</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Booking ID</TableHead>
                                <TableHead>Booking Date</TableHead>
                                <TableHead>Paid At</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {payments.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={10}
                                        className="h-24 text-center"
                                    >
                                        No payments found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                payments.map((payment) => (
                                    <TableRow key={payment.id}>
                                        <TableCell>
                                            <span
                                                className="font-medium"
                                                title={payment.transactionId}
                                            >
                                                {shortenId(
                                                    payment.transactionId
                                                )}
                                            </span>
                                        </TableCell>

                                        <TableCell className="font-semibold">
                                            {formatAmount(payment.amount)}
                                        </TableCell>

                                        <TableCell>
                                            <Badge variant="outline">
                                                {payment.provider}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                            {payment.method}
                                        </TableCell>

                                        <TableCell>
                                            <Badge
                                                variant={getStatusVariant(
                                                    payment.status
                                                )}
                                            >
                                                {payment.status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                            <span
                                                title={payment.bookingId}
                                            >
                                                {shortenId(
                                                    payment.bookingId
                                                )}
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            {payment.booking
                                                ? formatDate(
                                                    payment.booking
                                                        .bookingDate
                                                )
                                                : "—"}
                                        </TableCell>

                                        <TableCell>
                                            {formatDateTime(
                                                payment.paidAt
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {formatDateTime(
                                                payment.createdAt
                                            )}
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="icon"
                                                title="View payment"
                                            >
                                                <Link href={`/dashboard/payments/${payment.id}`}>
                                                    <Eye className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}