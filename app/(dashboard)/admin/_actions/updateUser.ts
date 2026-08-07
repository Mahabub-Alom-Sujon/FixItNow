"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface UpdateUserPayload {
    status?: "ACTIVE" | "BLOCKED";
    //isBanned?: boolean;
    role?: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
}

export const updateUser = async (
    id: string,
    payload: UpdateUserPayload
) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API_URL}/api/admin/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to update user");
    }

    revalidatePath("/admin/users");

    return data;
};