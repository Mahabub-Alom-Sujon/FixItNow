import HeroSection from "@/app/(public)/_components/home/hero-section";
import FeaturedServices from "@/app/(public)/_components/home/featured-services";
import ServiceCategories from "@/app/(public)/_components/home/service-categories";
import TopRatedTechnicians from "@/app/(public)/_components/home/top-rated-technicians";




export default function Home() {
  return (
    <>
        <HeroSection/>
        <ServiceCategories/>
        <FeaturedServices/>
        <TopRatedTechnicians/>
    </>
  );
}
