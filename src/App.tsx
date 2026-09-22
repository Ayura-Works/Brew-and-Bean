import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStatement from '@/components/BrandStatement';
import CoffeeSection from '@/components/CoffeeSection';
import CoffeeOrigin from '@/components/CoffeeOrigin';
import MenuSection from '@/components/MenuSection';
import SignatureDrink from '@/components/SignatureDrink';
import SpaceSection from '@/components/SpaceSection';
import StorySection from '@/components/StorySection';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import SeasonalFeature from '@/components/SeasonalFeature';
import Newsletter from '@/components/Newsletter';
import VisitSection from '@/components/VisitSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <BrandStatement />
        <CoffeeSection />
        <CoffeeOrigin />
        <MenuSection />
        <SignatureDrink />
        <SpaceSection />
        <StorySection />
        <ProcessSection />
        <Testimonials />
        <SeasonalFeature />
        <Newsletter />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
