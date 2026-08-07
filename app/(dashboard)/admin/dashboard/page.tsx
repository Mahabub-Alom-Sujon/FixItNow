import React from 'react';
import { getDashboardOverview } from "@/app/(dashboard)/admin/_actions/getDashboard";
import AdminDashboard from "@/app/(dashboard)/admin/_components/AdminDashboard";
export default async function AdminDashboardPage() {
    const { data } = await getDashboardOverview();
    // const {
    //     overview,
    //     recentBookings,
    // } = data;

    return (
        <>
            <AdminDashboard data={data}/>
        </>
    );
}