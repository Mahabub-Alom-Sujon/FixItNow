import Link from "next/link";
import { getServices } from "@/app/(public)/services/_actions/getServices";

interface PaginationProps {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Pagination({
     searchParams,
}: PaginationProps) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const result = await getServices({ query: params });
    const meta = result.data?.meta;
    if (!result.success || !meta) {
        return null;
    }
    const totalPages = meta.totalPage;

    return (
        <>
            <div className="mt-10 flex items-center justify-center gap-2">
                {/* Previous */}
                <Link
                    href={{
                        pathname: "/services",
                        query: {
                            ...params,
                            page: Math.max(page - 1, 1),
                        },
                    }}
                    className={`rounded-md border px-4 py-2 text-sm ${
                        page === 1
                            ? "pointer-events-none opacity-50"
                            : "hover:bg-muted"
                    }`}
                >
                    Previous
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                        key={p}
                        href={{
                            pathname: "/services",
                            query: {
                                ...params,
                                page: p,
                            },
                        }}
                        className={`rounded-md border px-4 py-2 text-sm ${
                            page === p
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                        }`}
                    >
                        {p}
                    </Link>
                ))}

                {/* Next */}
                <Link
                    href={{
                        pathname: "/services",
                        query: {
                            ...params,
                            page: Math.min(page + 1, totalPages),
                        },
                    }}
                    className={`rounded-md border px-4 py-2 text-sm ${
                        page === totalPages
                            ? "pointer-events-none opacity-50"
                            : "hover:bg-muted"
                    }`}
                >
                    Next
                </Link>
            </div>
        </>

    );
}