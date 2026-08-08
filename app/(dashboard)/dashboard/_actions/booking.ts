"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface CreateBookingPayload {
    bookingDate: string;
    bookingTime: string;
    note?: string;
    address: string;
    technicianId: string;
    serviceId: string;
}

const getAccessToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        throw new Error("Please login first.");
    }

    return token;
};

/**
 * Create Booking
 * POST /api/bookings
 */
// export const createBooking = async (
//     payload: CreateBookingPayload
// ) => {
//     const token = await getAccessToken();
//
//     const res = await fetch(`${API_URL}/api/bookings`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(payload),
//         cache: "no-store",
//     });
//
//     const result = await res.json();
//
//     if (!res.ok) {
//         throw new Error(result.message || "Booking creation failed.");
//     }
//
//     return result;
// };

/**
 * Customer Bookings
 * GET /api/bookings
 */
export const getBookings = async () => {
    const token = await getAccessToken();

    const res = await fetch(`${API_URL}/api/bookings`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Failed to fetch bookings.");
    }

    return result;
};

/**
 * Single Booking
 * GET /api/bookings/:id
 */
export const getBookingById = async (id: string) => {
    const token = await getAccessToken();

    const res = await fetch(`${API_URL}/api/bookings/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Failed to fetch booking.");
    }

    return result;
};