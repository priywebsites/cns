import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import OurWorkSection from "@/components/our-work-section";
import AboutSection from "@/components/about-section";
import ReviewsSection from "@/components/reviews-section";
import HoursSection from "@/components/hours-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <OurWorkSection />
      <AboutSection />
      <ReviewsSection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
