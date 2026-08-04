// "use server";
//
// import type { TechnicianQuery } from "@/types/types.technicians";
//
// //const API_URL = process.env.NEXT_PUBLIC_API_URL;
//
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
//
// export async function getTechnicians(params: TechnicianQuery) {
//     const query = new URLSearchParams();
//
//     if (params.searchTerm) {
//         query.append("searchTerm", params.searchTerm);
//     }
//
//     if (params.location) {
//         query.append("location", params.location);
//     }
//
//     if (params.category) {
//         query.append("category", params.category);
//     }
//
//     if (params.experience !== undefined) {
//         query.append("experience", params.experience.toString());
//     }
//
//     if (params.page) {
//         query.append("page", params.page.toString());
//     }
//
//     if (params.limit) {
//         query.append("limit", params.limit.toString());
//     }
//
//     if (params.minRating !== undefined) {
//         query.append("minRating", params.minRating.toString());
//     }
//
//     if (params.maxHourlyRate !== undefined) {
//         query.append("maxHourlyRate", params.maxHourlyRate.toString());
//     }
//
//     const res = await fetch(
//         `${BASE_URL}/api/technicians?${query.toString()}`,
//         {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             cache: "no-store",
//         }
//     );
//
//     if (!res.ok) {
//         throw new Error("Failed to fetch technicians");
//     }
//
//     return res.json();
// }

"use server"
export const getTechnicians = async ({query } : { query?: { [key: string]: string | string[] | undefined } }) => {
    const params = new URLSearchParams()
    if(query && query.searchTerm){
        params.set("searchTerm", query.searchTerm as string)
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/technicians?${params.toString()}`, {
        cache : "no-cache",
        next : {
            revalidate : 60 * 60 * 6,
            // tags : ["premium-posts"]
        }
    });
    const result = await res.json();
    return result;
}