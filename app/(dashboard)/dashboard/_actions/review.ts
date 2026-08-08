"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface CreateReviewPayload {
    bookingId: string;
    rating: number;
    comment?: string;
}

// Create Review
export const createReview = async (
    payload: CreateReviewPayload
) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        throw new Error("Please login first.");
    }

    const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(
            result.message || "Review creation failed."
        );
    }

    return result;
};

// Get All Reviews
// export const getAllReviews = async () => {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;
//
//     if (!accessToken) {
//         throw new Error("Please login first.");
//     }
//
//     const res = await fetch(`${API_URL}/api/reviews`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//         },
//         cache: "no-store",
//     });
//
//     const result = await res.json();
//
//     if (!res.ok) {
//         throw new Error(
//             result.message || "Failed to fetch reviews."
//         );
//     }
//
//     return result;
// };

// Get Review By ID
// export const getReviewById = async (id: string) => {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;
//
//     if (!accessToken) {
//         throw new Error("Please login first.");
//     }
//
//     const res = await fetch(`${API_URL}/api/reviews/${id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//         },
//         cache: "no-store",
//     });
//
//     const result = await res.json();
//
//     if (!res.ok) {
//         throw new Error(
//             result.message || "Failed to fetch review."
//         );
//     }
//
//     return result;
// };