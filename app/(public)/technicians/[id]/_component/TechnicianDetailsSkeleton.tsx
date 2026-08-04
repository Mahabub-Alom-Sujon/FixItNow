import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TechnicianDetailsSkeleton() {
    return (
        <div className="container mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
                {/* Left */}
                <div className="space-y-8 lg:col-span-7">
                    <Card className="rounded-2xl">
                        <CardContent className="p-8">
                            <div className="flex flex-col gap-6 sm:flex-row">
                                <Skeleton className="h-32 w-32 rounded-2xl" />

                                <div className="flex-1 space-y-4">
                                    <Skeleton className="h-8 w-64" />
                                    <Skeleton className="h-5 w-40" />
                                    <Skeleton className="h-5 w-80" />

                                    <div className="flex gap-3">
                                        <Skeleton className="h-8 w-24 rounded-full" />
                                        <Skeleton className="h-8 w-28 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                        <CardContent className="space-y-4 p-6">
                            <Skeleton className="h-7 w-48" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </CardContent>
                    </Card>
                </div>

                {/* Right */}
                <div className="space-y-8 lg:col-span-5">
                    <Card className="rounded-2xl">
                        <CardContent className="space-y-5 p-6">
                            <Skeleton className="h-7 w-44" />

                            <div className="flex flex-wrap gap-3">
                                <Skeleton className="h-10 w-28 rounded-full" />
                                <Skeleton className="h-10 w-32 rounded-full" />
                                <Skeleton className="h-10 w-24 rounded-full" />
                                <Skeleton className="h-10 w-36 rounded-full" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                        <CardContent className="space-y-4 p-6">
                            <Skeleton className="h-7 w-40" />

                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="space-y-2 border-b pb-4 last:border-none"
                                >
                                    <Skeleton className="h-5 w-36" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}