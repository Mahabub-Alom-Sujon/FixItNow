"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
    ArrowRight,
    BadgeCheck,
    Briefcase,
    MapPin,
    Star,
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const technicians = [
    {
        id: 1,
        name: "Mehedi Hasan",
        image: "/images/tech-1.jpg",
        profession: "Plumbing Specialist",
        rating: 4.9,
        reviews: 320,
        jobs: 1200,
        experience: "8 Years",
        location: "Dhaka",
        price: 450,
        verified: true,
    },
    {
        id: 2,
        name: "Rakib Ahmed",
        image: "/images/tech-1.jpg",
        profession: "Electrician",
        rating: 4.8,
        reviews: 281,
        jobs: 980,
        experience: "6 Years",
        location: "Rajshahi",
        price: 550,
        verified: true,
    },
    {
        id: 3,
        name: "Sadia Akter",
        image: "/images/tech-1.jpg",
        profession: "Cleaning Expert",
        rating: 5.0,
        reviews: 402,
        jobs: 1500,
        experience: "7 Years",
        location: "Dhaka",
        price: 600,
        verified: true,
    },
    {
        id: 4,
        name: "Jahid Islam",
        image: "/images/tech-1.jpg",
        profession: "Painter",
        rating: 4.7,
        reviews: 212,
        jobs: 760,
        experience: "5 Years",
        location: "Khulna",
        price: 500,
        verified: true,
    },
    {
        id: 5,
        name: "Rasel Khan",
        image: "/images/tech-1.jpg",
        profession: "AC Technician",
        rating: 4.9,
        reviews: 350,
        jobs: 1110,
        experience: "9 Years",
        location: "Sylhet",
        price: 700,
        verified: true,
    },
];

export default function TopRatedTechnicians() {
    const autoplay = useRef(
        Autoplay({
            delay: 3500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <Badge className="rounded-full bg-blue-100 px-4 py-1 text-blue-700 hover:bg-blue-100">
                            Top Rated
                        </Badge>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Meet Our Best Technicians
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-600">
                            Skilled professionals with verified experience, outstanding
                            ratings, and thousands of completed jobs.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/technicians">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                {/* Carousel */}
                <Carousel
                    plugins={[autoplay.current]}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                >
                    <CarouselContent className="-ml-6">
                        {technicians.map((tech) => (
                            <CarouselItem
                                key={tech.id}
                                className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                            >
                                <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                      style={
                                          {
                                              "--card-spacing": "0px",
                                          } as React.CSSProperties
                                      }
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={tech.image}
                                            alt={tech.name}
                                            width={500}
                                            height={400}
                                            priority={tech.id === 1}
                                            sizes="(max-width:640px) 100vw,
                                            (max-width:768px) 50vw,
                                            (max-width:1024px) 33vw,
                                            25vw"
                                            className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <Badge className="absolute left-5 top-5 bg-green-600 text-white">
                                            Available
                                        </Badge>

                                        {tech.verified && (
                                            <div className="absolute right-5 top-5 rounded-full bg-white p-2 shadow-lg">
                                                <BadgeCheck className="h-5 w-5 text-blue-600" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-5 p-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {tech.name}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                {tech.profession}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="font-semibold">
                                                    {tech.rating}
                                                </span>
                                                <span className="text-sm text-slate-500">
                                                    ({tech.reviews})
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-slate-500">
                                                <MapPin className="h-4 w-4" />
                                                {tech.location}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-slate-100 p-3 text-center">
                                                <Briefcase className="mx-auto mb-2 h-5 w-5 text-blue-600" />
                                                <p className="font-bold">
                                                    {tech.jobs}+
                                                </p>
                                                <span className="text-xs text-slate-500">
                                                    Jobs
                                                </span>
                                            </div>
                                            <div className="rounded-xl bg-slate-100 p-4 text-center">
                                                <p className="text-xl font-bold text-blue-600">
                                                    {tech.experience}
                                                </p>
                                                <span className="text-xs text-slate-500">
                                                    Experience
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-t pt-5">
                                            <div>
                                                <p className="text-sm text-slate-500">
                                                    Starting From
                                                </p>
                                                <h4 className="text-2xl font-bold text-blue-600">
                                                    ৳{tech.price}
                                                </h4>
                                            </div>
                                            <Button asChild>
                                                <Link href={`/technicians/${tech.id}`}>
                                                    View Profile
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    );
}