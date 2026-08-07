import React from 'react';
import Services from "../_components/Services"
import { getAllServices } from "@/app/(dashboard)/admin/_actions/getAllServices";

const Page =async () => {
    const { data } = await getAllServices();
    return (
        <>
            <Services services={data['services'] ?? []} />
        </>
    );
};

export default Page;