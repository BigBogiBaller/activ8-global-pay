import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Industries from "@/components/Industries";
import WhyActiv8 from "@/components/WhyActiv8";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(t);
  }, [hash]);
  return <div className="min-h-screen">
      <Seo title="Activ8Pay - Secure Payment Processing Solutions | Global Card Processing & Banking" description="Activ8Pay provides secure payment processing solutions for acquirers, banks and merchants worldwide: global card processing, corporate banking, fraud prevention and stablecoin payments." path="/" />
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
