import { cookies } from "next/headers";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getDashboardOverview = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard`, {
        method: "GET",
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard overview");
    }

    return res.json();
};