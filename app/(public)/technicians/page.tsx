import { Suspense } from "react";
// import { ServicesSkeleton } from "./_components/ServicesSkeleton";
// import { ServiceList } from "./_components/ServiceList";
// import ServicesSearchBar from "./_components/ServicesSearchBar";
import Pagination from "./_components/Pagination";
import TechnicianList from "@/app/(public)/technicians/_components/TechnicianList";
import { BadgeCheck } from "lucide-react";
import TechnicianSearchBar from "@/app/(public)/technicians/_components/TechnicianSearchBar";
import TechnicianListSkeleton from "@/app/(public)/technicians/_components/TechnicianListSkeleton";
const Technicians = async ({
   searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    return (
        <section className="min-h-screen">
            <div className="container mx-auto py-12 mt-10">
                <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            <BadgeCheck className="h-4 w-4" />
                            Verified & Trusted Technicians
                        </span>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                            Find the Perfect Technician
                        </h1>
                        <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                            Browse verified professionals, compare ratings and prices, and book reliable technicians for all your home service needs in just a few clicks.
                        </p>
                    </div>
                    <div className="w-full md:w-[380px]">
                        <TechnicianSearchBar />
                    </div>
                </div>
                <Suspense fallback={<TechnicianListSkeleton/>}>
                    <TechnicianList searchParams={searchParams} />
                    <div className="mt-10 flex justify-center">
                        <Pagination searchParams={searchParams} />
                    </div>
                </Suspense>

            </div>
        </section>
    );
};

export default Technicians;