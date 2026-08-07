import { Badge } from "@/components/ui/badge";

interface UserStatusBadgeProps {
    status: "ACTIVE" | "BLOCKED";
}

export default function UserStatusBadge({
                                            status,
                                        }: UserStatusBadgeProps) {
    if (status === "BLOCKED") {
        return (
            <Badge
                variant="destructive"
                className="bg-red-600 text-white hover:bg-red-600"
            >
                Banned
            </Badge>
        );
    }

    return (
        <Badge
            variant="default"
            className="bg-green-600 hover:bg-green-600"
        >
            Active
        </Badge>
    );
}