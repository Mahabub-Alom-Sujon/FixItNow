import { IServiceDetails } from "@/types/types.servicesingle";
// import ServiceHero from "./ServiceHero";
import ServiceInfo from "./ServiceInfo";
import TechnicianInfo from "./TechnicianInfo";
import BookingCard from "./BookingCard";
import BreadcrumbNav from "./BreadcrumbNav";
import TechnicianCard from "./TechnicianCard";

interface Props {
    service: IServiceDetails;
}

export default function ServiceDetails({
                                           service,
                                       }: Props) {
    return (
        <>
            <BreadcrumbNav
                // category={service.category.name}
                serviceTitle={service?.title}
            />

            <div className="grid gap-8 lg:grid-cols-3 mt-10">
                {/* Left Content */}
                <div className="space-y-8 lg:col-span-2">
                    <ServiceInfo service={service} />
                    <TechnicianCard technician={service.technician} />
                    {/*<ReviewsSection*/}
                    {/*    reviews={service.technician.reviews}*/}
                    {/*/>*/}
                </div>

                {/* Right Sidebar */}
                <aside className="lg:col-span-1">
                    <BookingCard
                        price={service.price}
                        duration={service.duration}
                        //technicianId={service.technician.id}
                        technicianId={service.technicianId}
                        serviceId={service.id}
                        availability={service.technician.availability}
                        // serviceCount={service.technician.services.length}
                    />
                </aside>
            </div>

        </>
    );
}