import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation className="bg-[#0e3156]" />
      <Hero />
      <Solutions />
      <About className="bg-[#0e3156]" />
      <Industries />
      <FAQ />
      <Contact />
      <Footer className="bg-[#0e3156]" />
    </div>;
};
export default Index;