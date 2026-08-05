"use server";

import { revalidateTag } from "next/cache";

export const getServiceDetails = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`, {
            method: "GET",
            next: {
                tags: [`services/${id}`],
            }
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch service details");
        }

        // revalidateTag(`services/${id}`);

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};