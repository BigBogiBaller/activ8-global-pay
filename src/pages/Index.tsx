import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Industries from "@/components/Industries";
import WhyActiv8 from "@/components/WhyActiv8";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <About />
      <Industries />
      <WhyActiv8 />
      <FAQ />
      <Contact />
      <Footer />
    </div>;
};
export default Index;