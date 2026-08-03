"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Search,
    ShieldCheck,
    Star,
    Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[120px]" />
            <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-sky-100 blur-[120px]" />

            <div className="container relative mx-auto px-4 py-16 lg:py-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
                            <Wrench className="h-4 w-4 text-blue-600" />
                            Bangladesh's Trusted Home Service Marketplace
                        </div>

                        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
                            Reliable Home Services
                            <span className="block text-blue-600">Anytime, Anywhere.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Book trusted technicians for plumbing, electrical work,
                            cleaning, appliance repair, painting and more. Fast booking,
                            verified professionals, and secure online payments.
                        </p>

                        {/* Search */}
                        {/*<><Card className="mt-10 border-0 p-4 shadow-xl">*/}
                        {/*    <div className="flex flex-col gap-4 md:flex-row">*/}
                        {/*        <div className="relative flex-1">*/}
                        {/*            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />*/}

                        {/*            <Input*/}
                        {/*                placeholder="Search services..."*/}
                        {/*                className="h-12 pl-12"*/}
                        {/*            />*/}
                        {/*        </div>*/}

                        {/*        <Button className="h-12 px-8">*/}
                        {/*            Search*/}
                        {/*        </Button>*/}
                        {/*    </div>*/}
                        {/*</Card></>*/}

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/services">
                                    Explore Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                            >
                                <Link href="/technicians">
                                    Become Technician
                                </Link>
                            </Button>
                        </div>

                        {/* Trust */}
                        <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                Verified Professionals
                            </div>

                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-green-500" />
                                Secure Payments
                            </div>

                            <div className="flex items-center gap-2">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                4.9 Customer Rating
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative flex justify-center">
                        {/* Image Card */}
                        <Card className="relative overflow-hidden rounded-[32px] border-0 bg-white p-6 shadow-2xl">
                            <Image
                                src="/images/hero-technician.png"
                                alt="Technician"
                                width={550}
                                height={650}
                                priority
                                className="rounded-3xl object-cover"
                            />

                            {/* Rating */}
                            <Card className="absolute left-6 top-6 rounded-2xl border-0 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-yellow-100 p-2">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold">4.9/5</h4>
                                        <p className="text-sm text-slate-500">
                                            Customer Rating
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Customers */}
                            <Card className="absolute bottom-8 right-6 rounded-2xl border-0 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                                <h3 className="text-3xl font-bold text-blue-600">
                                    10K+
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Happy Customers
                                </p>
                            </Card>
                        </Card>

                        {/* Floating Experience Card */}
                        <Card className="absolute -left-2 bottom-20 hidden rounded-2xl border-0 p-5 shadow-xl lg:block">
                            <h4 className="text-3xl font-bold text-blue-600">
                                500+
                            </h4>

                            <p className="text-sm text-slate-500">
                                Verified Technicians
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Stats */}
                {/*<div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">*/}
                {/*    {[*/}
                {/*        ["15K+", "Completed Services"],*/}
                {/*        ["500+", "Verified Technicians"],*/}
                {/*        ["4.9", "Average Rating"],*/}
                {/*        ["24/7", "Customer Support"],*/}
                {/*    ].map(([value, label]) => (*/}
                {/*        <Card*/}
                {/*            key={label}*/}
                {/*            className="rounded-2xl border-0 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"*/}
                {/*        >*/}
                {/*            <h2 className="text-4xl font-bold text-blue-600">*/}
                {/*                {value}*/}
                {/*            </h2>*/}

                {/*            <p className="mt-2 text-slate-600">{label}</p>*/}
                {/*        </Card>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </section>
    );
}