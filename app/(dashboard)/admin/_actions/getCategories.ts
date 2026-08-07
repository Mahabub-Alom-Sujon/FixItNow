import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
export const getAllCategories = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API_URL}/api/admin/categories`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch categories");
    }
    return data;
};