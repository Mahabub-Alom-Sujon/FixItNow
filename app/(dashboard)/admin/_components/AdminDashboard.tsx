"use client";

import { motion } from "framer-motion";
import {
    Users,
    Wrench,
    CalendarCheck,
    DollarSign,
    Clock,
    UserCheck,
} from "lucide-react";

import { formatCurrency, formatDateTime } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader} from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { cn } from "@/lib/utils";
interface AdminDashboardProps {
    data: {
        overview: {
            totalUsers: number;
            totalTechnicians: number;
            totalBookings: number;
            totalRevenue: number;
            pendingBookings: number;
            activeTechnicians: number;
        };
        recentBookings: any[];
    };
}

export default function AdminDashboard({
   data,
}: AdminDashboardProps) {
    const statCards = [
        {
            label: "Total Users",
            value: data.overview.totalUsers,
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            label: "Total Technicians",
            value: data.overview.totalTechnicians,
            icon: Wrench,
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            label: "Total Bookings",
            value: data.overview.totalBookings,
            icon: CalendarCheck,
            color: "text-purple-600",
            bg: "bg-purple-100",
        },
        {
            label: "Total Revenue",
            value: formatCurrency(data.overview.totalRevenue),
            icon: DollarSign,
            color: "text-yellow-600",
            bg: "bg-yellow-100",
        },
        {
            label: "Pending Bookings",
            value: data.overview.pendingBookings,
            icon: Clock,
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
        {
            label: "Active Technicians",
            value: data.overview.activeTechnicians,
            icon: UserCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-100",
        },
    ];

    return (
        <div className="mx-auto w-full max-w-7xl space-y-8">
            <PageHeader
                title="Admin Dashboard"
                description="Overview of the platform"
            />

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                {statCards.map((stat) => (
                    <Card
                        key={stat.label}
                        className="border shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-muted-foreground">
                                    {stat.label}
                                </p>

                                <h2 className="text-3xl font-bold tracking-tight">
                                    {stat.value}
                                </h2>
                            </div>

                            <div
                                className={cn(
                                    "flex h-12 w-12 items-center justify-center rounded-xl",
                                    stat.bg
                                )}
                            >
                                <stat.icon className={cn("h-6 w-6", stat.color)} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Bookings */}
            <Card className="overflow-hidden border shadow-sm">
                <CardHeader className="border-b bg-muted/30">
                    <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[900px] text-sm">
                            <thead className="bg-muted/40">
                            <tr>
                                <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                                    Customer
                                </th>
                                <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                                    Service
                                </th>
                                <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                                    Date
                                </th>
                                <th className="px-6 py-4 text-center font-semibold text-muted-foreground">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right font-semibold text-muted-foreground">
                                    Amount
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.recentBookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className="border-t transition-colors hover:bg-muted/30"
                                >
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">
                                        {booking.customer?.name}
                                    </td>

                                    <td className="px-6 py-4">
                                        {booking.service?.title}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                                        {formatDateTime(booking.bookingDate)}
                                    </td>

                                    <td className="px-6 py-4 text-center">
                                        <StatusBadge status={booking.status} />
                                    </td>

                                    <td className="px-6 py-4 text-right font-semibold whitespace-nowrap">
                                        {formatCurrency(booking.service?.price ?? 0)}
                                    </td>
                                </tr>
                            ))}

                            {data.recentBookings.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="py-12 text-center text-muted-foreground"
                                    >
                                        No recent bookings found.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}