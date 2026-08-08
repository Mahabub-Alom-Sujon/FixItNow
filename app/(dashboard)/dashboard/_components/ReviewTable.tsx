"use client";

import Link from "next/link";
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
import { Eye, Star } from "lucide-react";

export interface Review {
    id: string;
    rating: number;
    comment: string | null;
    bookingId: string;
    customerId: string;
    technicianId: string;
    createdAt: string;
    updatedAt: string;

    booking?: {
        id: string;
        bookingDate: string;
        bookingTime: string | null;
        address: string | null;
        status: string;
    };
}

interface ReviewTableProps {
    reviews: Review[];
}

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const shortenId = (id: string) => {
    if (!id) return "—";

    return `${id.slice(0, 8)}...`;
};

const Rating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">
                {rating}/5
            </span>
        </div>
    );
};

export default function ReviewTable({
                                        reviews,
                                    }: ReviewTableProps) {
    return (
        <Card>
            <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Rating</TableHead>
                                <TableHead>Comment</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Technician</TableHead>
                                <TableHead>Booking</TableHead>
                                <TableHead>Booking Date</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {reviews.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={8}
                                        className="h-24 text-center"
                                    >
                                        No reviews found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                reviews.map((review) => (
                                    <TableRow key={review.id}>
                                        <TableCell>
                                            <Rating
                                                rating={
                                                    review.rating
                                                }
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <p className="max-w-[250px] truncate">
                                                {review.comment ||
                                                    "No comment"}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            {shortenId(
                                                review.customerId
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {shortenId(
                                                review.technicianId
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            <Badge variant="outline">
                                                {shortenId(
                                                    review.bookingId
                                                )}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                            {review.booking
                                                ? formatDate(
                                                    review.booking
                                                        .bookingDate
                                                )
                                                : "—"}
                                        </TableCell>

                                        <TableCell>
                                            {formatDate(
                                                review.createdAt
                                            )}
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Button
                                                asChild
                                                variant="ghost"
                                                size="icon"
                                                title="View review"
                                            >
                                                <Link
                                                    href={`/admin/reviews/${review.id}`}
                                                >
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