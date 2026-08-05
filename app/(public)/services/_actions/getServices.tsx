// export const getServices = async ({
//       query,
// }: {
//     query?: { [key: string]: string | string[] | undefined };
// }) => {
//     const params = new URLSearchParams();
//     if (query) {
//         Object.entries(query).forEach(([key, value]) => {
//             if (value) {
//                 if (Array.isArray(value)) {
//                     value.forEach((v) => params.append(key, v));
//                 } else {
//                     params.set(key, value);
//                 }
//             }
//         });
//     }
//
//     const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/services?${params.toString()}`,
//         {
//             cache: "no-cache",
//             next: {
//                 revalidate: 60 * 60 * 6,
//             },
//         }
//     );
//
//     if (!res.ok) {
//         throw new Error("Failed to fetch services");
//     }
//
//     return res.json();
// };
export const getServices = async ({
                                      query,
                                  }: {
    query?: { [key: string]: string | string[] | undefined };
}) => {
    const params = new URLSearchParams();

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            if (value) {
                if (Array.isArray(value)) {
                    value.forEach((v) => params.append(key, v));
                } else {
                    params.set(key, value);
                }
            }
        });
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/services?${params.toString()}`,
        {
            next: {
                revalidate: 60 * 60 * 6, // 6 hours
                tags: ["services"],
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }

    return res.json();
};