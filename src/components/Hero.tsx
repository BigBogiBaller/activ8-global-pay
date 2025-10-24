import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe } from "@/components/ui/globe";
import { AnimatedBeam } from "@/components/ui/animated-beam-new";
import { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CreditCard, Building2, Shield, Wallet, Bitcoin, Store } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-16 items-center justify-center rounded-full border-2 border-emerald-500/50 bg-[#0e3156]/80 backdrop-blur-sm p-3 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Circle.displayName = "Circle";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

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
          
          <div 
            ref={containerRef}
            className="relative w-full max-w-2xl mx-auto h-[300px] mb-12"
          >
            {/* Payment method icons positioned around the button */}
            <Circle ref={div1Ref} className="absolute top-0 left-[10%]">
              <CreditCard className="w-8 h-8 text-emerald-500" />
            </Circle>
            <Circle ref={div2Ref} className="absolute top-0 right-[10%]">
              <Building2 className="w-8 h-8 text-emerald-500" />
            </Circle>
            <Circle ref={div3Ref} className="absolute bottom-0 left-[10%]">
              <Shield className="w-8 h-8 text-emerald-500" />
            </Circle>
            <Circle ref={div4Ref} className="absolute bottom-0 right-[10%]">
              <Wallet className="w-8 h-8 text-emerald-500" />
            </Circle>
            <Circle ref={div5Ref} className="absolute top-[50%] left-0 -translate-y-1/2">
              <Bitcoin className="w-8 h-8 text-emerald-500" />
            </Circle>
            <Circle ref={div6Ref} className="absolute top-[50%] right-0 -translate-y-1/2">
              <Store className="w-8 h-8 text-emerald-500" />
            </Circle>

            {/* Center button with ref */}
            <div 
              ref={buttonRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <Button variant="hero" onClick={scrollToContact} className="text-slate-200 bg-[#328a8e]">
                Get Started
              </Button>
            </div>

            {/* Animated beams connecting icons to button */}
            <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={buttonRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={buttonRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={buttonRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={buttonRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={buttonRef} />
            <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={buttonRef} />
          </div>

          <div className="relative w-full h-[800px] -mt-20">
            <Globe className="top-0 max-w-[1200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
