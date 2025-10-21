import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Hero = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#0e3156]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div ref={ref} className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Payments<br />
            Widely. Safely.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl">
            Secure payment processing solutions for acquirers, banks and merchants.
          </p>
          <Button variant="hero" onClick={scrollToContact} className="text-slate-200 bg-[#b3cbb9]">
            Get Started
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;