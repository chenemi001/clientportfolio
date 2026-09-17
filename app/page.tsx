import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from '@/components/About';
import HeroAboutTransition from "@/components/HeroAboutTransition";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from '@/components/CTA'
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
       <Hero/>

 <HeroAboutTransition />

       <About/>
       <Projects/>
       <Services/>
       <Testimonials/>
       <CTA/>
       <Footer/>
    

    
    </>
  );
}