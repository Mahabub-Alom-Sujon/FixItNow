// import ServiceFilters from "./_components/ServiceFilters";
// import ServiceCardList from "./_components/ServiceList";
// import ServicePagination from "./_components/ServicePagination";
// import { getServices } from "./_actions/getServices";
//
// // interface SearchParams {
// //     page?: string;
// //     limit?: string;
// //     searchTerm?: string;
// //     type?: string;
// //     location?: string;
// //     rating?: string;
// //     sortBy?: string;
// //     sortOrder?: "asc" | "desc";
// // }
//
// // interface ServicesPageProps {
// //     searchParams: Promise<SearchParams>;
// // }
//
// export default async function ServicesPage({
//    searchParams,
// }: ServicesPageProps) {
//     const params = await searchParams;
//
//     const page = Number(params.page ?? "1");
//     const limit = Number(params.limit ?? "9");
//
//     // Server Action
//     const result = await getServices({
//         page,
//         limit,
//         searchTerm: params.searchTerm,
//         type: params.type,
//         location: params.location,
//         rating: params.rating ? Number(params.rating) : undefined,
//         sortBy: params.sortBy,
//         sortOrder: params.sortOrder,
//     });
//
//     // Safe defaults
//     const services = result.data?.data ?? [];
//     const meta = result.data?.meta ?? {
//         page: 1,
//         limit: 9,
//         total: 0,
//         totalPage: 1,
//     };
//
//     return (
//         <section className="container mx-auto py-12">
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
//                 <div className="lg:col-span-4">
//                     <ServiceFilters
//                         searchTerm={params.searchTerm}
//                         location={params.location}
//                         type={params.type}
//                         sortBy={params.sortBy}
//                         sortOrder={params.sortOrder}
//                     />
//                 </div>
//
//                 <div className="lg:col-span-8">
//                     <ServiceCardList services={services} />
//
//                     {meta.totalPage > 1 && (
//                         <div className="mt-8 flex justify-center">
//                             <ServicePagination
//                                 page={meta.page}
//                                 totalPage={meta.totalPage}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// }

import { Suspense } from "react";
import { ServicesSkeleton } from "./_components/ServicesSkeleton";
import { ServiceList } from "./_components/ServiceList";
import ServicesSearchBar from "./_components/ServicesSearchBar";
import Pagination from "./_components/Pagination";

const Services = async ({
                            searchParams,
                        }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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
                <Suspense fallback={<ServicesSkeleton />}>
                    <div className="mt-10">
                        <ServiceList searchParams={searchParams} />
                    </div>
                    <div className="mt-10 flex justify-center">
                        <Pagination searchParams={searchParams} />
                    </div>
                </Suspense>
            </div>
        </section>
    );
};

export default Services;