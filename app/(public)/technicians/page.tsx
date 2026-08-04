import { Suspense } from "react";
// import { ServicesSkeleton } from "./_components/ServicesSkeleton";
// import { ServiceList } from "./_components/ServiceList";
// import ServicesSearchBar from "./_components/ServicesSearchBar";
import Pagination from "./_components/Pagination";
import TechnicianList from "@/app/(public)/technicians/_components/TechnicianList";

const Technicians = async ({
   searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    return (
        <></>
        // <section className="min-h-screen">
        //     <TechnicianList searchParams={searchParams} />
        // </section>
    );
};

export default Technicians;