import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import Footer from "@/components/shared/footer";
const PublicGroupLayout = async (
    {
        children
    } : {
        children: React.ReactNode
    }
) => {
    const user = await getMe();
    return (
        <div>
            <Navbar user={user}/>
            {children}
            <Footer/>
        </div>
    )
}

export default PublicGroupLayout