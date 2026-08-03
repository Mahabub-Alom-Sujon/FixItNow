// "use client";
//
// import Image from "next/image";
// import Link from "next/link";
// import {
//     ArrowRight,
//     Clock3,
//     MapPin,
//     ShieldCheck,
//     Star,
// } from "lucide-react";
//
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {Service} from "@/app/(public)/services/_actions/getServices";
//
//
// interface Props {
//     services: Service[];
// }
//
// export default function ServiceCardList({
//                                             services,
//                                              }: Props) {
//     return (
//         <section className="bg-white py-24">
//             <div className="container mx-auto px-4">
//                 {/*<div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">*/}
//                 {/*    <div>*/}
//                 {/*        <Badge className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">*/}
//                 {/*            Featured Services*/}
//                 {/*        </Badge>*/}
//
//                 {/*        <h2 className="mt-5 text-4xl font-bold">*/}
//                 {/*            Popular Home Services*/}
//                 {/*        </h2>*/}
//
//                 {/*        <p className="mt-3 max-w-2xl text-muted-foreground">*/}
//                 {/*            Discover trusted professionals with verified reviews and transparent pricing.*/}
//                 {/*        </p>*/}
//                 {/*    </div>*/}
//
//                 {/*    <Button asChild>*/}
//                 {/*        <Link href="/services">*/}
//                 {/*            View All*/}
//                 {/*            <ArrowRight className="ml-2 h-4 w-4" />*/}
//                 {/*        </Link>*/}
//                 {/*    </Button>*/}
//                 {/*</div>*/}
//
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
//                     {services.map((service) => (
//                         <Card
//                             key={service.id}
//                             className="overflow-hidden rounded-3xl p-0 transition hover:-translate-y-2 hover:shadow-xl"
//                         >
//                             <Image
//                                 src="/images/cleaning.jpg"
//                                 alt={service.title}
//                                 width={500}
//                                 height={300}
//                                 className="h-60 w-full object-cover"
//                             />
//
//                             <div className="space-y-5 p-6">
//
//                                 <Badge>{service.category.name}</Badge>
//
//                                 <div>
//                                     <h3 className="line-clamp-1 text-xl font-bold">
//                                         {service.title}
//                                     </h3>
//
//                                     <p className="text-sm text-muted-foreground">
//                                         by {service.technician.user.name}
//                                     </p>
//                                 </div>
//
//                                 <div className="flex items-center justify-between text-sm">
//
//                                     <div className="flex items-center gap-1">
//                                         <MapPin className="h-4 w-4" />
//                                         {service.serviceArea}
//                                     </div>
//
//                                     <div className="flex items-center gap-1">
//                                         <Clock3 className="h-4 w-4" />
//                                         {service.duration} mins
//                                     </div>
//
//                                 </div>
//
//                                 <div className="flex items-center justify-between">
//
//                                     <div className="flex items-center gap-1">
//                                         <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                                         {service.technician.averageRating}
//                                     </div>
//
//                                     <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                                         <ShieldCheck className="h-4 w-4 text-green-600" />
//                                         {service.technician.totalReviews} Reviews
//                                     </div>
//
//                                 </div>
//
//                                 <div className="flex items-center justify-between border-t pt-4">
//
//                                     <div>
//                                         <p className="text-xs text-muted-foreground">
//                                             Starting From
//                                         </p>
//
//                                         <h3 className="text-2xl font-bold text-primary">
//                                             ৳{service.price}
//                                         </h3>
//                                     </div>
//
//                                     <Button asChild>
//                                         <Link href={`/services/${service.id}`}>
//                                             Book Now
//                                         </Link>
//                                     </Button>
//
//                                 </div>
//
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//
//             </div>
//         </section>
//     );
// }

import { getServices } from "@/app/(public)/services/_actions/getServices";
import ServiceCard from "./ServiceCard";
import { IService } from "@/types/types.service";

export async function ServiceList({
    searchParams,
}: {
searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;
    const result = await getServices({ query });
    const services = result.data?.data ?? [];
    // console.log(services)
    if (!result.success || services.length === 0) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No premium service found.
            </p>
        );
    }
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service: IService) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}