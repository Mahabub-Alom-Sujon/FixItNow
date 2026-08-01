"use client";

import { useState } from "react";

import RegisterForm from "../_components/RegisterForm";
import RoleSelector from "@/app/auth/_components/RoleSelector";

import { Card } from "@/components/ui/card";

export type Role = "CUSTOMER" | "TECHNICIAN";

export default function RegisterPage() {
    const [role, setRole] = useState<Role | null>(null);

    return (
        <main className="relative overflow-hidden bg-gradient-to-br from-background via-slate-50 to-primary/5">
            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
                <Card className="w-full max-w-md rounded-3xl border bg-background/95 shadow-2xl backdrop-blur">
                    {!role ? (
                        <RoleSelector onSelect={setRole} />
                    ) : (
                        <RegisterForm
                            role={role}
                            onBack={() => setRole(null)}
                        />
                    )}
                </Card>
            </div>
        </main>
    );
}