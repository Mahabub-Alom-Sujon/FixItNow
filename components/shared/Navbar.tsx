"use client"
import Link from "next/link";
import { useState } from "react";
import {Menu, X, Wrench, User, Bell, Search, LayoutDashboard, Settings, LogOut} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {logout} from "@/service/logout";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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

    // login state from props
    const profile = user?.data?.profile;
    const isLoggedIn = !!user?.success && !!profile;
    const handleLogout = async () => {
        try {
            toast.loading("Logging out...", {id: "logout"});

            await logout(); // logout function

            toast.success("Logged out successfully!", {
                id: "logout",
                description: "See you soon 👋"
            });

            router.replace("/login");

        } catch (error) {
            console.error("Logout error:", error);

            toast.error("Failed to logout", {
                id: "logout",
                description: "Please try again",
            });
        }
    }

    const getDashboardHref = () => {
        if (!profile) return "/login";

        switch (profile.role) {
            case "ADMIN":
                return "/admin/dashboard";

            case "TECHNICIAN":
                return "/dashboard/technician";

            case "CUSTOMER":
                return "/dashboard/customer";

            default:
                return "/login";
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
                    {/*<Link href="/become-technician">*/}
                    {/*    <Button>Become Technician</Button>*/}
                    {/*</Link>*/}

                    {isLoggedIn && profile ? (
                        /* === Logged In: User Dropdown === */
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">{user.data?.profile?.name || "Name"}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.data?.profile?.email || "Email"}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={getDashboardHref()} className="cursor-pointer">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/profile" className="cursor-pointer">
                                        <User className="mr-2 h-4 w-4" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/settings" className="cursor-pointer">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="text-destructive focus:text-destructive"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        /* === Not Logged In: Login + Sign Up === */
                        <div className="hidden md:flex items-center gap-3">
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">Sign Up</Link>
                            </Button>
                        </div>
                    )}
                </div>

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
                                        onClick={handleLogout}
                                        // onClick={() =>
                                        //     handleLogout("logout")
                                        // }
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <Link href="/login">
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