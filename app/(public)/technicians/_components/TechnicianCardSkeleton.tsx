import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TechnicianCardSkeleton() {
    return (
        <Card className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-md">
            {/* Image */}
            <div className="relative">
                <Skeleton className="h-52 w-full" />

                <Skeleton className="absolute left-5 top-5 h-7 w-20 rounded-full" />

                <Skeleton className="absolute right-5 top-5 h-9 w-9 rounded-full" />
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
                {/* Name & Bio */}
                <div className="space-y-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>

                {/* Rating & Location */}
                <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 w-20" />
                </div>

                {/* Jobs & Experience */}
                <div className="flex items-center justify-between rounded-lg border bg-slate-50 px-4 py-4">
                    <div className="space-y-2 text-center">
                        <Skeleton className="mx-auto h-6 w-10" />
                        <Skeleton className="mx-auto h-3 w-12" />
                    </div>

                    <div className="h-10 w-px bg-slate-200" />

                    <div className="space-y-2 text-center">
                        <Skeleton className="mx-auto h-6 w-12" />
                        <Skeleton className="mx-auto h-3 w-20" />
                    </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between border-t pt-5">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-7 w-20" />
                    </div>

                    <Skeleton className="h-10 w-32 rounded-md" />
                </div>
            </div>
        </Card>
    );
}