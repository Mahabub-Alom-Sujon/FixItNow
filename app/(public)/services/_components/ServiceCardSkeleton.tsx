import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
    return (
        <Card className="[--card-spacing:0] overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-sm">
            {/* Image */}
            <div className="relative">
                <Skeleton className="h-60 w-full" />

                {/* Category Badge */}
                <Skeleton className="absolute left-4 top-4 h-9 w-24 rounded-full" />

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-4">
                    <Skeleton className="h-5 w-16 bg-white/30" />
                    <Skeleton className="h-5 w-24 bg-white/30" />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
                {/* Title & Description */}
                <div className="space-y-3">
                    <Skeleton className="h-7 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                {/* Location & Duration */}
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded-full" />
                        <Skeleton className="h-4 w-20" />
                    </div>

                    <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded-full" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-200 pt-5">
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-8 w-24" />
                    </div>

                    <Skeleton className="h-11 w-32 rounded-xl" />
                </div>
            </div>
        </Card>
    );
};

export default ServiceCardSkeleton;