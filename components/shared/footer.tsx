import Link from "next/link";

import {
    // Facebook,
    // Instagram,
    // Linkedin,
    // Twitter,
    Wrench,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const company = [
    "About",
    "Contact",
    "Careers",
    "Blog",
];

const customer = [
    "Find Technician",
    "Book Service",
    "Reviews",
    "Support",
];

const technician = [
    "Become Technician",
    "Dashboard",
    "Earnings",
    "Help Center",
];

export default function Footer() {
    return (
        <footer className="mt-24 border-t bg-slate-950 text-white">
            <div className="container mx-auto px-4 py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

                    {/* Logo */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-blue-600 p-3">
                                <Wrench className="h-6 w-6" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">
                                    FixItNow
                                </h2>
                            </div>
                        </div>

                        <p className="text-slate-400">
                            Book trusted technicians for plumbing,
                            electrical, cleaning, painting,
                            appliance repair and more.
                        </p>

                        <div className="space-y-3 text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <Phone size={16} />
                                +880 1700-000000
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                support@fixitnow.com
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Company
                        </h3>

                        <div className="space-y-3">
                            {company.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Customer */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Customers
                        </h3>

                        <div className="space-y-3">
                            {customer.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Technician */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Technicians
                        </h3>

                        <div className="space-y-3">
                            {technician.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="block text-slate-400 hover:text-white"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold">
                            Newsletter
                        </h3>

                        <p className="mb-4 text-slate-400">
                            Get updates, offers and service news.
                        </p>

                        <div className="flex">
                            <input
                                placeholder="Email address"
                                className="w-full rounded-l-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none"
                            />

                            <button className="rounded-r-lg bg-blue-600 px-5 font-semibold hover:bg-blue-700">
                                Join
                            </button>
                        </div>

                        <div className="mt-6 flex gap-4">
                            {/*<Facebook className="cursor-pointer hover:text-blue-500" />*/}
                            {/*<Twitter className="cursor-pointer hover:text-sky-400" />*/}
                            {/*<Instagram className="cursor-pointer hover:text-pink-500" />*/}
                            {/*<Linkedin className="cursor-pointer hover:text-blue-400" />*/}
                        </div>
                    </div>

                </div>

                <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} FixItNow. All rights reserved.
                </div>
            </div>
        </footer>
    );
}