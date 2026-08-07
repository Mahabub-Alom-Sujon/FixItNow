import { redirect } from "next/navigation";
import Sidebar from "@/components/shared/Sidebar";
// import MobileNav from "@/components/layout/MobileNav";
import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";

export default async function DashboardLayout({
                                                  children,
                                              }: {
    children: React.ReactNode;
}) {
    const result = await getMe();

    if (!result.success) {
        redirect("/login");
    }

    //const user = result.data;
    const user = await getMe();
    // console.log(user)
    return (
        <div className="min-h-screen bg-background">

            <Navbar user={user} />
            <div className="flex">
                <Sidebar user={result.data.profile} />
                <main className="flex-1 overflow-x-hidden p-4 pb-20 md:p-6 md:pb-6 lg:p-8">
                    {children}
                </main>
            </div>

            {/*<MobileNav user={user} />*/}
        </div>
    );
}