import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Component as FinanceChart } from "@/components/ui/finance-chart";
import { useState, useEffect } from "react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [chartDimensions, setChartDimensions] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(600, window.innerWidth - 100);
      const height = 400;
      setChartDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  return (
    <section id="about" className="py-20 bg-[#0E3156]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
              <p>
                At Activ8Pay, we connect forward-thinking businesses across all industries to a robust, reliable, and efficient global payment ecosystem.
              </p>
              <p>
                As an Independent Sales Organization (ISO) partnered with 25 acquiring banks, including several top-tier European financial institutions, we empower merchants to access the right acquiring and banking partners for their specific needs.
              </p>
              <p>
                Our expertise covers a wide range of industries, from e-commerce, digital goods, dating and adult to iGaming and crypto, and other high-growth verticals. Whether your business needs a reliable acquirer, a dedicated IBAN or a robust fraud and chargeback prevention solution, Activ8Pay provides the right connections and guidance to help you operate safely and scale globally.
              </p>
              <p>
                Because every business is unique, our mission is to deliver tailored payment solutions that bring peace of mind and enable scalable growth.
              </p>
              <p className="font-semibold">
                Are you ready to Activ8 and grow your business?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-primary/20 backdrop-blur-sm p-8 rounded-2xl border border-primary/30">
              <FinanceChart width={chartDimensions.width} height={chartDimensions.height} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
