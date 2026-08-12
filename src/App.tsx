import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Programs from '@/components/Programs';
import FeaturedProgram from '@/components/FeaturedProgram';
import Memberships from '@/components/Memberships';
import Trainers from '@/components/Trainers';
import Schedule from '@/components/Schedule';
import BMICalculator from '@/components/BMICalculator';
import Transformations from '@/components/Transformations';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Facility from '@/components/Facility';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import TrialCTA from '@/components/TrialCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <FeaturedProgram />
        <Memberships />
        <Trainers />
        <Schedule />
        <BMICalculator />
        <Transformations />
        <Gallery />
        <WhyChooseUs />
        <Facility />
        <Testimonials />
        <FAQ />
        <TrialCTA />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
