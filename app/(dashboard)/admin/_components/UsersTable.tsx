"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
// import { format } from "date-fns";

import UserStatusBadge from "./UserStatusBadge";
import UserActions from "./UserActions";

interface User {
    id: string;
    name: string;
    email: string;
    role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
    status: "ACTIVE" | "BLOCKED";
    createdAt: string;
    bookings?: unknown[];
}

interface Props {
    users: User[];
}

export default function UsersTable({ users }: Props) {
    return (
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Bookings</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>
                                                {user.name.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>

                                        <span className="font-medium">{user.name}</span>
                                    </div>
                                </TableCell>

                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary">{user.role}</Badge>
                                </TableCell>
                                <TableCell>
                                    <UserStatusBadge status={user.status} />
                                </TableCell>
                                <TableCell>
                                    {/* {format(new Date(user.createdAt), "MMM dd, yyyy")} */}
                                    Date
                                </TableCell>
                                <TableCell>{user.bookings?.length ?? 0}</TableCell>
                                <TableCell className="text-right">
                                    <UserActions
                                        id={user.id}
                                        status={user.status}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}