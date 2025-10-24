import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe } from "@/components/ui/globe";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#0e3156] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Bridge To
            <br />
            Secure And Stable Payments
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 mx-auto">
            Secure payment processing solutions for acquirers, banks and merchants.
          </p>
          <div className="relative z-10 mb-12">
            <AnimatedBeam />
            <Button variant="hero" onClick={scrollToContact} className="text-slate-200 bg-[#328a8e] relative z-20">
              Get Started
            </Button>
          </div>
          <div className="relative w-full h-[600px] -mt-20">
            <Globe className="top-0 max-w-[900px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
