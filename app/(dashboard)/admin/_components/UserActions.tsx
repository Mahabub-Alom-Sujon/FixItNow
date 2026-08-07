"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Ban, Loader2, Undo2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateUser } from "../_actions/updateUser";

interface UserActionsProps {
    id: string;
    status: "ACTIVE" | "BLOCKED";
}

export default function UserActions({
                                        id,
                                        status,
                                    }: UserActionsProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const isBlocked = status === "BLOCKED";

    const handleAction = () => {
        startTransition(async () => {
            try {
                console.log("Updating user:", id);

                const result = await updateUser(id, {
                    status: isBlocked ? "ACTIVE" : "BLOCKED",
                });

                console.log(result);

                toast.success(
                    isBlocked
                        ? "User unbanned successfully."
                        : "User banned successfully."
                );

                router.refresh();
            } catch (error) {
                console.error(error);

                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Failed to update user."
                );
            }
        });
    };

    return (
        <Button
            type="button"
            size="sm"
            variant={isBlocked ? "outline" : "destructive"}
            disabled={isPending}
            onClick={handleAction}
        >
            {isBlocked ? (
                <>
                    <Undo2 className="mr-2 h-4 w-4" />
                    Unban
                </>
            ) : (
                <>
                    <Ban className="mr-2 h-4 w-4" />
                    Ban
                </>
            )}
        </Button>
    );
}