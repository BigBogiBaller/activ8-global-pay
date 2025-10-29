import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe } from "@/components/ui/globe";
import { AnimatedBeam } from "@/components/ui/animated-beam-new";
import { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Circle.displayName = "Circle";

const Icons = {
  googlePay: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N6PA5ERHWpG7dr7LzWyJMeVyX6UdW0.png"
      alt="Google Pay"
      className="w-full h-full object-contain"
    />
  ),
  cb: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xtpAdZxAIreunOcFjyQURL5dttmrQo.png"
      alt="CB"
      className="w-full h-full object-contain"
    />
  ),
  jcb: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lfj63ZzdidF00vhNbLQQ8JSqttraih.png"
      alt="JCB"
      className="w-full h-full object-contain"
    />
  ),
  mastercard: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wfrfGy2dGZCEoWMLbCGy1l7Ez7uuj8.png"
      alt="Mastercard"
      className="w-full h-full object-contain"
    />
  ),
  visa: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C80vCprkt0gB4jXHChpo8tcWxv7IYI.png"
      alt="Visa"
      className="w-full h-full object-contain"
    />
  ),
  applePay: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ITG8kqnxufjjLThR8kisrnKzQWJ2H2.png"
      alt="Apple Pay"
      className="w-full h-full object-contain"
    />
  ),
  sepa: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kFiuV3ByaCtyjQvZ9VBHj0PURFcDhi.png"
      alt="SEPA"
      className="w-full h-full object-contain"
    />
  ),
  amex: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iNxZZhUI8xZUqN09vn3S9dyhi0gGdO.png"
      alt="American Express"
      className="w-full h-full object-contain"
    />
  ),
  usdc: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjwDzxMZvBrxgo54paORo8CyZwsgvM.png"
      alt="USDC"
      className="w-full h-full object-contain"
    />
  ),
  tether: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zKEaWPChug31ZPdACCqoCCRmvmFHc.png"
      alt="Tether"
      className="w-full h-full object-contain"
    />
  ),
};

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-4 md:pb-20 bg-[#0e3156] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-20">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Animated Beam Background - Hidden on mobile */}
          <div className="hidden md:block absolute inset-0 top-0 pointer-events-none">
            <div
              className="relative flex h-[1100px] w-full max-w-6xl items-start justify-center overflow-hidden rounded-lg p-10 pt-0"
              ref={containerRef}
            >
              <div className="flex size-full flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div1Ref}>
                    <Icons.cb />
                  </Circle>
                  <Circle ref={div5Ref}>
                    <Icons.mastercard />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div8Ref} className="p-0">
                    <Icons.jcb />
                  </Circle>
                  <Circle ref={div10Ref}>
                    <Icons.applePay />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div2Ref}>
                    <Icons.googlePay />
                  </Circle>
                  <Circle ref={div6Ref}>
                    <Icons.visa />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between gap-32">
                  <Circle ref={div9Ref} className="p-0">
                    <Icons.amex />
                  </Circle>
                  <Circle ref={div11Ref}>
                    <Icons.usdc />
                  </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <Circle ref={div3Ref}>
                    <Icons.sepa />
                  </Circle>
                  <Circle ref={div7Ref}>
                    <Icons.tether />
                  </Circle>
                </div>
              </div>

              <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div4Ref} />
              <AnimatedBeam containerRef={containerRef} fromRef={div11Ref} toRef={div4Ref} />
            </div>
          </div>

          {/* Text Content - Overlays the animated beam */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Bridge To
              <br />
              Secure And Stable Payments
            </h1>
            
            <div className="flex justify-center mb-6" ref={div4Ref}>
              <Button variant="hero" onClick={scrollToContact} className="text-slate-200 bg-[#328a8e]">
                Get Started
              </Button>
            </div>
          </div>

          <div className="relative w-full h-[800px] md:h-[800px] mt-4 md:mt-6 -mb-32 md:mb-0">
            <Globe 
              className="top-0 max-w-[1200px]" 
              config={{
                width: 800,
                height: 800,
                onRender: () => {},
                devicePixelRatio: 2,
                phi: 0,
                theta: 0.3,
                dark: 0,
                diffuse: 0.4,
                mapSamples: 16000,
                mapBrightness: 1.2,
                baseColor: [0.196, 0.541, 0.557],
                markerColor: [0.196, 0.541, 0.557],
                glowColor: [0.196, 0.541, 0.557],
                markers: [
                  { location: [14.5995, 120.9842], size: 0.03 },
                  { location: [19.076, 72.8777], size: 0.1 },
                  { location: [23.8103, 90.4125], size: 0.05 },
                  { location: [30.0444, 31.2357], size: 0.07 },
                  { location: [39.9042, 116.4074], size: 0.08 },
                  { location: [-23.5505, -46.6333], size: 0.1 },
                  { location: [19.4326, -99.1332], size: 0.1 },
                  { location: [40.7128, -74.006], size: 0.1 },
                  { location: [34.6937, 135.5022], size: 0.05 },
                  { location: [41.0082, 28.9784], size: 0.06 },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
