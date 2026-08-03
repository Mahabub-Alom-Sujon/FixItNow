// "use client";
//
// import { useRef } from "react";
// import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";
//
// import {
//     ArrowRight,
//     Brush,
//     Bug,
//     Hammer,
//     KeyRound,
//     Paintbrush,
//     ShieldCheck,
//     Snowflake,
//     Sparkles,
//     Trees,
//     Truck,
//     Wrench,
//     Zap,
// } from "lucide-react";
//
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
// } from "@/components/ui/carousel";
//
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
//
// const categories = [
//     {
//         title: "Plumbing",
//         icon: Wrench,
//         services: 245,
//         color: "from-blue-500 to-cyan-500",
//     },
//     {
//         title: "Electrical",
//         icon: Zap,
//         services: 180,
//         color: "from-yellow-400 to-orange-500",
//     },
//     {
//         title: "Cleaning",
//         icon: Sparkles,
//         services: 320,
//         color: "from-emerald-400 to-green-600",
//     },
//     {
//         title: "Painting",
//         icon: Paintbrush,
//         services: 110,
//         color: "from-pink-500 to-rose-500",
//     },
//     {
//         title: "Appliance Repair",
//         icon: ShieldCheck,
//         services: 98,
//         color: "from-violet-500 to-indigo-600",
//     },
//     {
//         title: "Carpentry",
//         icon: Brush,
//         services: 150,
//         color: "from-orange-500 to-red-500",
//     },
//     {
//         title: "AC Repair",
//         icon: Snowflake,
//         services: 132,
//         color: "from-cyan-500 to-sky-600",
//     },
//     {
//         title: "Moving Service",
//         icon: Truck,
//         services: 87,
//         color: "from-indigo-500 to-blue-700",
//     },
//     {
//         title: "Pest Control",
//         icon: Bug,
//         services: 76,
//         color: "from-lime-500 to-green-700",
//     },
//     {
//         title: "Gardening",
//         icon: Trees,
//         services: 94,
//         color: "from-green-500 to-emerald-700",
//     },
//     {
//         title: "Roof Repair",
//         icon: Hammer,
//         services: 63,
//         color: "from-slate-600 to-gray-800",
//     },
//     {
//         title: "Locksmith",
//         icon: KeyRound,
//         services: 58,
//         color: "from-amber-500 to-yellow-600",
//     },
// ];
//
// export default function ServiceCategories() {
//     const autoplay = useRef(
//         Autoplay({
//             delay: 2500,
//             stopOnInteraction: false,
//             stopOnMouseEnter: true,
//         })
//     );
//
//     return (
//         <section className="bg-slate-50 py-24">
//             <div className="container mx-auto px-4">
//                 {/* Header */}
//                 <div className="mb-12 flex items-center justify-between">
//                     <div>
//                         <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//                           Popular Categories
//                         </span>
//                         <h2 className="mt-4 text-4xl font-bold text-slate-900">
//                             Explore Services
//                         </h2>
//                         <p className="mt-3 max-w-xl text-slate-600">
//                             Find trusted professionals for every home service you need.
//                         </p>
//                     </div>
//                     <Button asChild className="hidden md:flex">
//                         <Link href="/services">
//                             View All
//                             <ArrowRight className="ml-2 h-4 w-4" />
//                         </Link>
//                     </Button>
//                 </div>
//
//                 {/* Carousel */}
//                 <Carousel
//                     plugins={[autoplay.current]}
//                     opts={{
//                         align: "start",
//                         loop: true,
//                         dragFree: true,
//                     }}
//                     className="w-full"
//                 >
//                     <CarouselContent className="-ml-4">
//                         {categories.map((item) => {
//                             const Icon = item.icon;
//                             return (
//                                 <CarouselItem
//                                     key={item.title}
//                                     className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
//                                 >
//                                     <Link href="/services" className="block h-full">
//                                         <Card className="group relative h-full overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
//                                             {/* Background Glow */}
//                                             <div
//                                                 className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
//                                             />
//
//                                             {/* Icon */}
//                                             <div
//                                                 className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}
//                                             >
//                                                 <Icon className="h-6 w-6 text-white" />
//                                             </div>
//
//                                             {/* Title */}
//                                             <h3 className="mt-0 text-base font-semibold text-slate-900">
//                                                 {item.title}
//                                             </h3>
//
//                                             {/* Services */}
//                                             <p className="mt-0 text-xs text-slate-500">
//                                                 {item.services}+ Verified Services
//                                             </p>
//
//                                             {/* Footer */}
//                                             <div className="mt-0 flex items-center justify-between">
//                                               <span className="text-sm font-medium text-blue-600">
//                                                 Explore
//                                               </span>
//                                                 <div className="rounded-full bg-slate-100 p-1.5 transition-all duration-300 group-hover:bg-blue-600">
//                                                     <ArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
//                                                 </div>
//                                             </div>
//                                         </Card>
//                                     </Link>
//                                 </CarouselItem>
//                             );
//                         })}
//                     </CarouselContent>
//                 </Carousel>
//
//                 {/* Mobile Button */}
//                 <div className="mt-10 flex justify-center md:hidden">
//                     <Button asChild>
//                         <Link href="/services">
//                             View All Services
//                             <ArrowRight className="ml-2 h-4 w-4" />
//                         </Link>
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useRef } from "react";
import Link from "next/link";
import useSWR from "swr";
import Autoplay from "embla-carousel-autoplay";

import {
    ArrowRight,
    Brush,
    Bug,
    Hammer,
    KeyRound,
    Paintbrush,
    ShieldCheck,
    Snowflake,
    Sparkles,
    Trees,
    Truck,
    Wrench,
    Zap,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ICategoryResponse } from "@/types/types.category";

// Fetcher
const fetcher = async (url: string): Promise<ICategoryResponse> => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
};

// Icon Map
const iconMap = {
    Plumbing: Wrench,
    Electrical: Zap,
    Cleaning: Sparkles,
    Painting: Paintbrush,
    "Appliance Repair": ShieldCheck,
    Carpentry: Brush,
    "AC Repair": Snowflake,
    "Moving Service": Truck,
    "Pest Control": Bug,
    Gardening: Trees,
    "Roof Repair": Hammer,
    Locksmith: KeyRound,
};

// Color Map
const colorMap = {
    Plumbing: "from-blue-500 to-cyan-500",
    Electrical: "from-yellow-400 to-orange-500",
    Cleaning: "from-emerald-400 to-green-600",
    Painting: "from-pink-500 to-rose-500",
    "Appliance Repair": "from-violet-500 to-indigo-600",
    Carpentry: "from-orange-500 to-red-500",
    "AC Repair": "from-cyan-500 to-sky-600",
    "Moving Service": "from-indigo-500 to-blue-700",
    "Pest Control": "from-lime-500 to-green-700",
    Gardening: "from-green-500 to-emerald-700",
    "Roof Repair": "from-slate-600 to-gray-800",
    Locksmith: "from-amber-500 to-yellow-600",
};

export default function ServiceCategories() {
    const autoplay = useRef(
        Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const { data, error, isLoading } = useSWR<ICategoryResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
        fetcher
    );

    if (isLoading) {
        return (
            <section className="py-24 text-center">
                Loading categories...
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-24 text-center text-red-500">
                Failed to load categories.
            </section>
        );
    }

    const categories = data?.data ?? [];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                          Popular Categories
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900">
                            Explore Services
                        </h2>

                        <p className="mt-3 max-w-xl text-slate-600">
                            Find trusted professionals for every home service you need.
                        </p>
                    </div>

                    <Button asChild className="hidden md:flex">
                        <Link href="/services">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Carousel */}
                <Carousel
                    plugins={[autoplay.current]}
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {categories.map((item) => {
                            const Icon =
                                iconMap[item.name as keyof typeof iconMap] ?? Wrench;

                            const color =
                                colorMap[item.name as keyof typeof colorMap] ??
                                "from-blue-500 to-cyan-500";

                            return (
                                <CarouselItem
                                    key={item.id}
                                    className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                                >
                                    <Link href="/services" className="block h-full">
                                        <Card className="group relative h-full overflow-hidden rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                                            {/* Background Glow */}
                                            <div
                                                className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl`}
                                            />

                                            {/* Icon */}
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} shadow-md`}
                                            >
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="mt-0 text-base font-semibold text-slate-900">
                                                {item.name}
                                            </h3>

                                            {/* Services */}
                                            <p className="mt-0 text-xs text-slate-500">
                                                {item.services.length} Verified Services
                                            </p>

                                            {/* Footer */}
                                            <div className="mt-0 flex items-center justify-between">
                                                <span className="text-sm font-medium text-blue-600">
                                                  Explore
                                                </span>

                                                <div className="rounded-full bg-slate-100 p-1.5 transition-all duration-300 group-hover:bg-blue-600">
                                                    <ArrowRight className="h-4 w-4 transition-colors group-hover:text-white" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>

                {/* Mobile Button */}
                <div className="mt-10 flex justify-center md:hidden">
                    <Button asChild>
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}