"use client";

import React, { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { toast } from "sonner";
import { loginAction } from "@/app/(auth)/_actions/authActions";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/schemas/login.schema";
type LoginState = {
    success: boolean;
    message: string;
};

const initialState: LoginState = {
    success: false,
    message: "",
};

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const [state, action, pending] = useActionState(
        loginAction,
        initialState
    );
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;

        const formData = {
            email: (
                form.elements.namedItem("email") as HTMLInputElement
            ).value.trim(),

            password: (
                form.elements.namedItem("password") as HTMLInputElement
            ).value,
        };

        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            e.preventDefault();

            const firstError = result.error.issues[0]?.message;

            toast.error(firstError);

            return;
        }
    };

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            toast.success(state.message);
            // router.push("/dashboard");
        } else {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 via-white to-blue-100 p-4">
            <Card className="p-5 w-full max-w-md rounded-3xl border-0 shadow-2xl">
                <CardHeader className="space-y-4 text-center">
                    {/*<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white">*/}
                    {/*    <Lock className="h-8 w-8" />*/}
                    {/*</div>*/}
                    <div>
                        <CardTitle className="text-3xl font-bold">
                            Welcome Back
                        </CardTitle>

                        <CardDescription className="mt-2">
                            Login to your account
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    <form action={action}
                          className="space-y-5"
                          onSubmit={handleSubmit}
                          noValidate
                    >
                        {/* Email */}

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>

                            <div className="relative flex items-center">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="h-12 w-full pl-12"
                                    style={{
                                        paddingLeft: "2.5rem", // 40px = Tailwind pl-10
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password */}

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-primary hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <div className="relative flex items-center">
                                {/* Left Icon */}
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />

                                {/* Input */}
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    className="h-12 w-full pl-12 pr-0"
                                />

                                {/* Right Icon */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            disabled={pending}
                            className="h-12 w-full text-base font-semibold"
                        >
                            {pending ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>

                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-3 text-muted-foreground">
                                    OR
                                </span>
                            </div>
                        </div>

                        <p className="text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link
                                href="/register"
                                className="font-semibold text-primary hover:underline"
                            >
                                Create Account
                            </Link>
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}