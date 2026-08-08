"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export interface CreatePaymentPayload {
    bookingId: string;
}

// Create Payment
export const createPayment = async (
    payload: CreatePaymentPayload
) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        throw new Error("Please login first.");
    }

    const res = await fetch(`${API_URL}/api/payments/create`, {
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
            result.message || "Payment creation failed."
        );
    }

    return result;
};

// Get All Payments
export const getAllPayments = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        throw new Error("Please login first.");
    }

    const res = await fetch(`${API_URL}/api/payments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(
            result.message || "Failed to fetch payments."
        );
    }

    return result;
};

// Get Payment By ID
export const getPaymentById = async (id: string) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        throw new Error("Please login first.");
    }

    const res = await fetch(`${API_URL}/api/payments/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error(
            result.message || "Failed to fetch payment."
        );
    }

    return result;
};