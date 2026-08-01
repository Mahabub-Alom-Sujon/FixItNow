"use client";

import { useState } from "react";
import { Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { toast } from "sonner";

import {
    RegisterFormData,
    registerSchema,
} from "@/schemas/register.schema";

import { registerAction } from "../_actions/registerAction";


type Role = "CUSTOMER" | "TECHNICIAN";


interface RegisterFormProps {
    role: Role;
    onBack: () => void;
}


export default function RegisterForm({
     role,
     onBack,
}: RegisterFormProps) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            profileImage: "",
            password: "",
            role,
        },
    });


    const onSubmit = async (
        data: RegisterFormData
    ) => {
        try {
            await registerAction(data);
            toast.success("Registration successful!", {
                description: "Redirecting to the login page...",
            });
            setTimeout(() => {
                router.push("/auth/login");
            }, 1200);

        } catch (error) {
            toast.error("Registration failed", {
                description:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong. Please try again.",
            });
        }
    };
    return (
        <>
            {/* Header */}
            <CardHeader className="space-y-3 pb-8 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight">
                    Create{" "}
                    <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        {role === "CUSTOMER" ? "Customer" : "Technician"}
                    </span>
                    {" "}Account
                </CardTitle>
                <CardDescription className="text-base">
                    Complete your information to join FixItNow.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input
                            placeholder="John Doe"
                            className="h-12 rounded-xl focus-visible:ring-2"
                            {...register("name")}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input
                            type="email"
                            placeholder="john@example.com"
                            className="h-12rounded-xl"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input
                            placeholder="+8801700000000"
                            className="h-12 rounded-xl"
                            {...register("phone")}
                        />

                        {errors.phone && (
                            <p className="text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    {/* Profile */}
                    <div className="space-y-2">
                        <Label>Profile Image URL</Label>
                        <Input
                            placeholder="https://avatar.com/image.jpg"
                            className="h-12 rounded-xl"
                            {...register("profileImage")}
                        />
                        {errors.profileImage && (
                            <p className="text-sm text-red-500">
                                {errors.profileImage.message}
                            </p>
                        )}
                    </div>
                    {/* Password */}
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <div className="relative flex items-center">
                            <Input
                                type={showPassword ? "text" : "password"}
                                className="h-12 rounded-xlpr-1"
                                {...register("password")}
                            />

                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-lg"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </Button>
                        </div>
                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <input type="hidden" {...register("role")}/>
                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onBack}
                            className="h-12 flex-1 rounded-xl"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4"/>
                            Back
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-12 flex-1 rounded-xl bg-blue-600 from-primary to-blue-600 shadow-lg transition-all hover:shadow-xl"
                        >
                            {
                                isSubmitting
                                    ?
                                    (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                            Creating...
                                        </>
                                    ) :
                                    "Create Account"
                            }
                        </Button>

                    </div>

                </form>
            </CardContent>
        </>
    );
}