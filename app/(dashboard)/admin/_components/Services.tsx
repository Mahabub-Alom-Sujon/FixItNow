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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// import ServiceActions from "./ServiceActions";

interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    createdAt: string;
    isAvailable: boolean;
    category?: {
        id: string;
        name: string;
    };
    bookings?: unknown[];
}

interface Props {
    services: Service[];
}

export default function ServicesTable({ services }: Props) {
    return (
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Bookings</TableHead>
                            {/*<TableHead className="text-right">Actions</TableHead>*/}
                            <TableHead>Created</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>
                                                {service.title.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <p className="font-medium">{service.title}</p>
                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Badge variant="outline">
                                        {service.category?.name ?? "N/A"}
                                    </Badge>
                                </TableCell>

                                <TableCell>৳{service.price}</TableCell>

                                <TableCell>{service.duration} min</TableCell>

                                <TableCell>
                                    <Badge
                                        variant={
                                            service.isAvailable ? "default" : "destructive"
                                        }
                                    >
                                        {service.isAvailable ? "Available" : "Unavailable"}
                                    </Badge>
                                </TableCell>


                                <TableCell>{service.bookings?.length ?? 0}</TableCell>
                                <TableCell>
                                    {new Date(service.createdAt).toLocaleDateString()}
                                </TableCell>

                                {/*<TableCell className="text-right">*/}
                                {/*    /!* <ServiceActions*/}
                                {/*        id={service.id}*/}
                                {/*        isAvailable={service.isAvailable}*/}
                                {/*    /> *!/*/}
                                {/*</TableCell>*/}
                            </TableRow>
                        ))}

                        {services.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={8} className="h-24 text-center">
                                    No services found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}