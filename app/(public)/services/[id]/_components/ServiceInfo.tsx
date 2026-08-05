import {
    BadgeDollarSign,
    Clock,
    MapPin,
    Wrench,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IServiceDetails } from "@/types/types.servicesingle";

interface ServiceInfoProps {
    service: IServiceDetails;
}

export default function ServiceInfo({
                                        service,
                                    }: ServiceInfoProps) {
    return (
        <Card className="rounded-2xl border shadow-sm">
            <CardContent className="space-y-6 p-5">
                {/* About */}
                <div>
                    <h2 className="text-xl font-semibold">
                        About this Service
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {service.description}
                    </p>
                </div>

                <Separator />

                {/* Service Details */}
                <div>
                    <h3 className="mb-4 text-lg font-semibold">
                        Service Details
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {/*/!* Price *!/*/}
                        {/*<div className="flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-primary/40 hover:shadow-sm">*/}
                        {/*    <div className="rounded-full bg-blue-100 p-2">*/}
                        {/*        <BadgeDollarSign className="h-4 w-4 text-blue-600" />*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <p className="text-xs text-muted-foreground">*/}
                        {/*            Price*/}
                        {/*        </p>*/}

                        {/*        <p className="font-semibold">*/}
                        {/*            ৳{service.price.toLocaleString()}*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*/!* Duration *!/*/}
                        {/*<div className="flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-primary/40 hover:shadow-sm">*/}
                        {/*    <div className="rounded-full bg-amber-100 p-2">*/}
                        {/*        <Clock className="h-4 w-4 text-amber-600" />*/}
                        {/*    </div>*/}

                        {/*    <div>*/}
                        {/*        <p className="text-xs text-muted-foreground">*/}
                        {/*            Duration*/}
                        {/*        </p>*/}

                        {/*        <p className="font-semibold">*/}
                        {/*            {service.duration} Minutes*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Service Area */}
                        <div className=" flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-primary/40 hover:shadow-sm">
                            <div className="rounded-full bg-green-100 p-2">
                                <MapPin className="h-4 w-4 text-green-600" />
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Service Area
                                </p>

                                <p className="font-semibold">
                                    {service.serviceArea}
                                </p>
                            </div>
                        </div>

                        {/* Category */}
                        <div className="flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-primary/40 hover:shadow-sm">
                            <div className="rounded-full bg-violet-100 p-2">
                                <Wrench className="h-4 w-4 text-violet-600" />
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Category
                                </p>

                                <p className="font-semibold">
                                    {service.category.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}