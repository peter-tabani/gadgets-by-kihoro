import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import PromoBar from "@/components/layout/PromoBar";
import HeroSection from "@/components/home/HeroSection";
import BestsellersSection from "@/components/home/BestsellersSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import SignupCtaSection from "@/components/home/SignupCtaSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FeaturedPromoGridSection from "@/components/home/FeaturedPromoGridSection";
import TopDealsSection from "@/components/home/TopDealsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <PromoBar />
      <HeroSection />
      <BestsellersSection />
      <CategoriesSection />
      <SignupCtaSection />
      <WhyChooseUsSection />
      <FeaturedPromoGridSection />
      <TopDealsSection />
       <Footer />
    </main>
  );
}