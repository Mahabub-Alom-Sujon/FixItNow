"use server";

import { revalidateTag } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface GetTechniciansParams {
    searchTerm?: string;
    location?: string;
    page?: number;
    limit?: number;
    minRating?: number;
    maxHourlyRate?: number;
}

export async function getTechnicians(
    params: GetTechniciansParams = {}
) {
    const searchParams = new URLSearchParams();

    if (params.searchTerm) {
        searchParams.append("searchTerm", params.searchTerm);
    }

    if (params.location) {
        searchParams.append("location", params.location);
    }

    if (params.page) {
        searchParams.append("page", params.page.toString());
    }

    if (params.limit) {
        searchParams.append("limit", params.limit.toString());
    }

    if (params.minRating) {
        searchParams.append("minRating", params.minRating.toString());
    }

    if (params.maxHourlyRate) {
        searchParams.append(
            "maxHourlyRate",
            params.maxHourlyRate.toString()
        );
    }

    const res = await fetch(
        `${API_URL}/api/technicians?${searchParams.toString()}`,
        {
            method: "GET",
            cache: "no-store",
            next: {
                tags: ["technicians"],
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch technicians");
    }

    return res.json();
}

export async function revalidateTechnicians() {
    // revalidateTag("technicians");
}