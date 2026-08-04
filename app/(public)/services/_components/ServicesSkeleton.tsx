export function ServicesSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-90 animate-pulse rounded-2xl bg-muted" />
            ))}
        </div>
    );
}