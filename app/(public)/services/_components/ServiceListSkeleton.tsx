import ServiceCardSkeleton from "./ServiceCardSkeleton";

const ServiceListSkeleton = () => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default ServiceListSkeleton;