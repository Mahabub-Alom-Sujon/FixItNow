import Link from "next/link";
import { User, Wrench, ArrowRight } from "lucide-react";

import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export type Role = "CUSTOMER" | "TECHNICIAN";

interface Props {
    onSelect: (role: Role) => void;
}

export default function RoleSelector({ onSelect }: Props) {
    return (
        <>
            <CardHeader className="space-y-3 pb-8 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight">
                    Create Your Account
                </CardTitle>

                <CardDescription className="mx-auto max-w-sm text-base leading-relaxed">
                    Choose how you'd like to use the platform.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
                {/* Customer */}
                <button
                    type="button"
                    onClick={() => onSelect("CUSTOMER")}
                    className="
                        group flex w-full items-center gap-5
                        rounded-2xl border border-border bg-background
                        p-5 text-left
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-primary
                        hover:bg-primary/5
                        hover:shadow-lg
                    "
                >
                    <div
                        className="
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl
                            bg-blue-100
                            text-blue-600
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <User className="h-7 w-7" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                            Customer
                        </h3>

                        <p className="text-muted-foreground mt-1 text-sm">
                            Book and manage home service requests easily.
                        </p>
                    </div>

                    <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </button>

                {/* Technician */}
                <button
                    type="button"
                    onClick={() => onSelect("TECHNICIAN")}
                    className="
                        group flex w-full items-center gap-5
                        rounded-2xl border border-border bg-background
                        p-5 text-left
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-primary
                        hover:bg-primary/5
                        hover:shadow-lg
                    "
                >
                    <div
                        className="
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl
                            bg-orange-100
                            text-orange-600
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    >
                        <Wrench className="h-7 w-7" />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                            Technician
                        </h3>

                        <p className="text-muted-foreground mt-1 text-sm">
                            Accept service requests and grow your business.
                        </p>
                    </div>

                    <ArrowRight className="h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </button>
            </CardContent>

            <CardFooter className="mt-6 flex justify-center border-t pt-6">
                <p className="text-muted-foreground text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-primary font-semibold transition-colors hover:text-primary/80 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </CardFooter>
        </>
    );
}