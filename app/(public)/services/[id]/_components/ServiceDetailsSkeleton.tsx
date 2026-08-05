import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetailsSkeleton() {
    return (
        <div className="space-y-10">
            {/* Breadcrumb */}
            <Skeleton className="h-24 w-full rounded-2xl" />
            <div className="grid gap-8 lg:grid-cols-3">
                {/* Left */}
                <div className="space-y-8 lg:col-span-2">
                    {/* Service Info */}
                    <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                            <Skeleton className="h-8 w-52" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[1, 2].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 rounded-xl border p-4"
                                    >
                                        <Skeleton className="h-12 w-12 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-3 w-20" />
                                            <Skeleton className="h-5 w-32" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technician */}
                    <Card className="rounded-2xl">
                        <CardContent className="space-y-6 p-6">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-8 w-56" />
                                <Skeleton className="h-10 w-36 rounded-lg" />
                            </div>

                            <div className="flex items-center gap-4">
                                <Skeleton className="h-16 w-16 rounded-full" />

                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-40" />
                                    <Skeleton className="h-4 w-28" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((item) => (
                                    <Card key={item}>
                                        <CardContent className="flex flex-col items-center gap-2 p-4">
                                            <Skeleton className="h-8 w-8 rounded-full" />
                                            <Skeleton className="h-6 w-10" />
                                            <Skeleton className="h-3 w-16" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar */}
                <Card className="h-fit rounded-2xl">
                    <CardContent className="space-y-5 p-6">
                        <Skeleton className="h-8 w-28" />
                        <Skeleton className="h-10 w-36" />

                        <Skeleton className="h-px w-full" />

                        <Skeleton className="h-12 w-full rounded-lg" />
                        <Skeleton className="h-12 w-full rounded-lg" />
                        <Skeleton className="h-12 w-full rounded-lg" />

                        <Skeleton className="h-12 w-full rounded-xl" />

                        <Skeleton className="h-20 w-full rounded-xl" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}