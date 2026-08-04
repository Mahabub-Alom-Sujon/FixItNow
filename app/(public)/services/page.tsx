import { Suspense } from "react";
import { ServicesSkeleton } from "./_components/ServicesSkeleton";
import { ServiceList } from "./_components/ServiceList";
import ServicesSearchBar from "./_components/ServicesSearchBar";
import Pagination from "./_components/Pagination";
import ServiceFilter from "@/app/(public)/services/_components/ServiceFilter";

const Services = async ({
    searchParams,
}: { searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    return (
        <section className="min-h-screen">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-10">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"><div>
                    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      Our Marketplace
                    </span>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                        Explore Services
                    </h1>

                        <p className="mt-2 max-w-2xl text-base text-slate-600">
                            Find trusted professionals for cleaning, plumbing, electrical,
                            painting, appliance repair, and many more services.
                        </p>
                    </div>

                    <div className="w-full md:w-[380px]">
                        <ServicesSearchBar />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Filter */}
                    <aside className="lg:col-span-3">
                        <ServiceFilter />
                    </aside>
                    {/* Services */}
                    <main className="lg:col-span-9">
                        <Suspense fallback={<ServicesSkeleton/>}>
                            <ServiceList searchParams={searchParams} />
                            <div className="mt-10 flex justify-center">
                                <Pagination searchParams={searchParams} />
                            </div>
                        </Suspense>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Services;