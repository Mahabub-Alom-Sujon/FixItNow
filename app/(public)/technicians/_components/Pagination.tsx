"use client";

import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
                                       page,
                                       totalPages,
                                       onPageChange,
                                   }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPages = () => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        pages.push(1);

        if (page > 3) {
            pages.push("...");
        }

        const start = Math.max(2, page - 1);
        const end = Math.min(totalPages - 1, page + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (page < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <Button
                variant="outline"
                size="icon"
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {getPages().map((item, index) =>
                item === "..." ? (
                    <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        disabled
                    >
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                ) : (
                    <Button
                        key={item}
                        variant={page === item ? "default" : "outline"}
                        onClick={() => onPageChange(item)}
                        className="min-w-10"
                    >
                        {item}
                    </Button>
                )
            )}

            <Button
                variant="outline"
                size="icon"
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
}