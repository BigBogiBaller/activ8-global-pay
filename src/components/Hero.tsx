import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Payments<br />
            Widely. Safely.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl">
            Secure payment processing solutions for acquirers, banks and merchants.
          </p>
          <Button variant="hero" onClick={scrollToContact}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
