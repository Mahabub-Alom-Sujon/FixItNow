"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wrench, User, Bell, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {logout} from "@/service/logout";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Technicians", href: "/technicians" },
    { title: "How It Works", href: "/how-it-works" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

type IUser = {
    success: boolean,
    message: string,
    data?: {
        profile?: {
            id: string,
            name: string,
            email: string,
            phone: string,
            profileImage: string,
            address: string | null,
            city: string | null,
            role: string,
            status: string,
            isVerified: boolean,
            userStatus: string | null;
            createdAt: string;
            updatedAt: string;
            technician?: null;
        }
    }
}

type NavbarProps = {
    user : IUser
}

export default function Navbar({user} : NavbarProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const handleUserMenuAction = async (action: string) => {
        if (action !== "logout") return;

        try {
            await logout();

            toast.success("Logged out successfully");

            router.push("/auth/login");
            router.refresh();
        } catch {
            toast.error("Logout failed");
        }
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-xl">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="rounded-xl bg-blue-600 p-2 text-white">
                        <Wrench className="h-5 w-5" />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-900">
                            FixIt<span className="text-blue-600">Now</span>
                        </h2>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Link key={item.title}
                              href={item.href}
                              className="text-sm font-medium text-slate-600 transition hover:text-blue-600" >
                            {item.title}
                        </Link> ))}
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Link href="/become-technician">
                        <Button>Become Technician</Button>
                    </Link>

                    {user?.success ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-60">
                                <DropdownMenuLabel>
                                    <div className="space-y-1">
                                        <p className="font-medium">
                                            {user.data?.profile?.name}
                                        </p>

                                        <p className="text-xs text-muted-foreground">
                                            {user.data?.profile?.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <Link href="/profile">
                                        <User className="mr-2 h-4 w-4" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/settings">
                                        Settings
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem
                                    onClick={() => handleUserMenuAction("logout")}
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/auth/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                    )}
                </div>

                {/*/!* Search *!/*/}
                {/*<div className="hidden w-72 items-center lg:flex">*/}
                {/*    <div className="relative w-full">*/}
                {/*        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />*/}
                {/*        <Input*/}
                {/*            placeholder="Search services..."*/}
                {/*            className="pl-9"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Actions */}
                {/* Mobile */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t bg-white lg:hidden">
                    <div className="space-y-2 p-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-lg p-3 text-sm font-medium hover:bg-slate-100"
                            >
                                {item.title}
                            </Link>
                        ))}

                        <div className="pt-4 space-y-3">
                            <Link href="/become-technician">
                                <Button className="w-full">
                                    Become Technician
                                </Button>
                            </Link>

                            {user?.success ? (
                                <>
                                    <Link href="/profile">
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Profile
                                        </Button>
                                    </Link>

                                    <Button
                                        variant="destructive"
                                        className="w-full"
                                        onClick={() =>
                                            handleUserMenuAction("logout")
                                        }
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <Link href="/auth/login">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}