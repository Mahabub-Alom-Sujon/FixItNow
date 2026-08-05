import TechnicianCardSkeleton from "./TechnicianCardSkeleton";

export default function TechnicianListSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <TechnicianCardSkeleton key={index} />
            ))}
        </div>
    );
}